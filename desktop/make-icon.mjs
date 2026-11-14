// Generates build/icon.png (256x256): a pixel-art ringed planet. No dependencies.
import { writeFileSync, mkdirSync } from 'node:fs';
import { deflateSync } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const S = 256, P = 8, G = S / P; // 32x32 grid of 8px "pixels"
const px = Buffer.alloc(S * S * 4);
const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16), 255];
function cell(gx, gy, c) {
    for (let y = gy * P; y < gy * P + P; y++)
        for (let x = gx * P; x < gx * P + P; x++) px.set(c, (y * S + x) * 4);
}

const bg = hex('#0b1026'), star = hex('#e2e8f0');
const bands = ['#fde68a', '#f59e0b', '#fbbf24', '#d97706', '#fcd34d'].map(hex);
const shade = hex('#92400e'), ring = hex('#a5f3fc'), ringDark = hex('#38bdf8');
const c = 15.5, R = 9;
const onRing = (x, y) => {
    // tilted ellipse
    const dx = x - c, dy = y - c, a = -0.35;
    const u = dx * Math.cos(a) - dy * Math.sin(a), v = dx * Math.sin(a) + dy * Math.cos(a);
    const d = (u * u) / (15 * 15) + (v * v) / (4.2 * 4.2);
    return d > 0.72 && d < 1.0 ? (v > 0 ? 'front' : 'back') : null;
};

for (let y = 0; y < G; y++) for (let x = 0; x < G; x++) {
    const corner = Math.min(x, G - 1 - x) + Math.min(y, G - 1 - y);
    if (corner < 3) continue; // rounded corners stay transparent
    cell(x, y, bg);
    if ((x * 7 + y * 13) % 29 === 0) cell(x, y, star);
    const r = onRing(x, y);
    if (r === 'back') cell(x, y, ringDark);
    const dx = x - c, dy = y - c;
    if (dx * dx + dy * dy <= R * R) {
        const band = bands[Math.floor((y - (c - R)) / 3.6) % bands.length];
        cell(x, y, dx + dy > 6 ? shade : band);
    }
    if (r === 'front') cell(x, y, ring);
}

function crc32(buf) {
    let c, crc = 0xffffffff;
    for (const b of buf) { c = (crc ^ b) & 0xff; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; crc = (crc >>> 8) ^ c; }
    return (crc ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
    const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
    const td = Buffer.concat([Buffer.from(type), data]);
    const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
    return Buffer.concat([len, td, crc]);
}
const raw = Buffer.alloc(S * (S * 4 + 1));
for (let y = 0; y < S; y++) px.copy(raw, y * (S * 4 + 1) + 1, y * S * 4, (y + 1) * S * 4);
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(S, 0); ihdr.writeUInt32BE(S, 4); ihdr[8] = 8; ihdr[9] = 6;
const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0)),
]);
const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'build');
mkdirSync(dir, { recursive: true });
writeFileSync(path.join(dir, 'icon.png'), png);
console.log('Wrote build/icon.png');
