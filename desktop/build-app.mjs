// Copies the game into desktop/app/ and swaps its CDN links for local copies,
// so the packaged .exe runs fully offline. Downloads are cached in desktop/vendor/.
import { readFile, writeFile, mkdir, copyFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(here, '..', 'saturn_guardian.html');
const vendor = path.join(here, 'vendor');
const out = path.join(here, 'app');

const TAILWIND_URL = 'https://cdn.tailwindcss.com/3.4.17';
const FONTS_URL = 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Press+Start+2P&display=swap';
// A modern browser UA makes Google Fonts serve woff2
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';

const exists = (p) => access(p).then(() => true, () => false);

async function fetchOk(url, opts) {
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
    return res;
}

async function ensureVendor() {
    await mkdir(path.join(vendor, 'fonts'), { recursive: true });

    const tw = path.join(vendor, 'tailwind.js');
    if (!(await exists(tw))) {
        console.log('Downloading Tailwind...');
        await writeFile(tw, await (await fetchOk(TAILWIND_URL)).text());
    }

    const css = path.join(vendor, 'fonts.css');
    if (!(await exists(css))) {
        console.log('Downloading fonts...');
        let text = await (await fetchOk(FONTS_URL, { headers: { 'User-Agent': UA } })).text();
        const urls = [...new Set([...text.matchAll(/url\((https:[^)]+)\)/g)].map((m) => m[1]))];
        for (const [i, url] of urls.entries()) {
            const name = `font-${i}.woff2`;
            const buf = Buffer.from(await (await fetchOk(url)).arrayBuffer());
            await writeFile(path.join(vendor, 'fonts', name), buf);
            text = text.split(url).join(`fonts/${name}`);
        }
        await writeFile(css, text);
    }
}

async function main() {
    await ensureVendor();
    await mkdir(path.join(out, 'fonts'), { recursive: true });

    let html = await readFile(src, 'utf8');
    const before = html;
    html = html.replace(/<script src="https:\/\/cdn\.tailwindcss\.com[^"]*"><\/script>/, '<script src="tailwind.js"></script>');
    html = html.replace(/<link href="https:\/\/fonts\.googleapis\.com[^"]*" rel="stylesheet">/, '<link href="fonts.css" rel="stylesheet">');
    if (html === before || /https:\/\/(cdn\.tailwindcss|fonts\.googleapis)/.test(html)) {
        throw new Error('Could not replace the CDN links in saturn_guardian.html');
    }
    // The web app manifest and icon only matter for installing from the website
    html = html.replace(/\s*<link rel="(manifest|apple-touch-icon)"[^>]*>/g, '');
    // Graphics mode the exe starts in: `node build-app.mjs 64` (default), `128` or `256`
    const mode = ['128', '256'].includes(process.argv[2]) ? process.argv[2] : '64';
    html = html.replace('<script src="tailwind.js"></script>', `<script>window.SV_DEFAULT_MODE = '${mode}';</script>\n    <script src="tailwind.js"></script>`);
    if (mode !== '64') html = html.replace('<title>Saturn Guardian</title>', `<title>Saturn Guardian ${mode}</title>`);
    console.log(`Graphics mode: ${mode}-bit`);

    await writeFile(path.join(out, 'index.html'), html);
    await copyFile(path.join(vendor, 'tailwind.js'), path.join(out, 'tailwind.js'));
    await copyFile(path.join(vendor, 'fonts.css'), path.join(out, 'fonts.css'));
    const { readdir } = await import('node:fs/promises');
    for (const f of await readdir(path.join(vendor, 'fonts'))) {
        await copyFile(path.join(vendor, 'fonts', f), path.join(out, 'fonts', f));
    }
    console.log('App files ready in desktop/app/');
}

main().catch((e) => { console.error(e.message); process.exit(1); });
