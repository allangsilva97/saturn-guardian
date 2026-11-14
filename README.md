# Saturn Vanguard

A retro 2D run-and-gun platformer in a single HTML file. No build step: open `saturn_vanguard.html` in a browser.

**▶ Play in your browser:** https://allangsilva97.github.io/saturn-vanguard/ (keyboard required). Pick an edition:
- **64-bit Classic:** chunky 480×270 pixel art with CRT scanlines
- **128-bit Remastered:** 3× resolution, dynamic lighting, bloom, shadows, richer skies and more particles

Both editions are the same game with the same saves; switch any time with the **GFX** button on the main menu.

**⬇ Windows download:** [latest release](https://github.com/allangsilva97/saturn-vanguard/releases/latest)

## Features
- **3 classes:** Ranger (double jump), Sentinel (hover, extra shield), Arcanist (glide, faster super)
- **3 elements:** Fire, Shock, Void. Match an enemy's shield colour to shatter it
- **4 worlds, 12 stages:** Iron Yard, Crimson Dunes, Frozen Moon, Void Citadel, each ending in a boss
- **Champions:** random Barrier, Overload and Unstoppable variants (at most 2 types per stage), plus mid-stage warp-ins, each countered by its own weapon: Piercer Rifle, Arc Disruptor, Breacher Slug
- **Shuffled stages:** every run rebuilds each stage from randomly ordered modules (pits, climbs, lifts across wide gaps, elevator towers, secret bunkers)
- **Treasure & secrets:** ride elevators to tower-roof chests, find supply caches on lookouts, and walk through cracked false walls for secret stashes
- **Armor:** upgrade the helmet, gauntlets, chest, legs and class item separately, and paint each piece with colours bought in the Paint Shop
- **Crouch to dodge:** level enemy shots fly over you while you crouch
- **10 weapons:** Auto Rifle, SMG, Pulse Rifle, Hand Cannon, Shotgun, Sniper Rifle, Rocket Launcher, plus the three anti-champion weapons
- **Armory:** spend credits on weapons and upgrades; progress is saved in the browser

## Windows desktop app (.exe)
The `desktop/` folder wraps the game in Electron as two portable, fully offline exes, one per edition:

```bash
cd desktop
npm install
node node_modules/electron/install.js
npm run dist
```

This writes `desktop/release/SaturnVanguard-64bit.exe` and `desktop/release/SaturnVanguard-128bit.exe` (`npm run dist:64` / `dist:128` build just one). `npm start` / `npm run start:128` run the app without packaging it. F11 toggles fullscreen.

The exes are not code-signed, so Windows SmartScreen asks for **More info → Run anyway**, and PCs with Windows 11 Smart App Control turned on may block them outright.

## Controls
| Key | Action |
|---|---|
| A / D | Move |
| W / S | Aim up / crouch (aim down in the air) |
| J or Space | Jump (hold for class ability; S + Jump drops through ledges) |
| K | Fire (hold) |
| Q / E or 1–9, 0 | Switch weapon |
| R | Reload |
| L | Melee |
| I | Grenade |
| O | Super |
| P / Esc | Pause |
