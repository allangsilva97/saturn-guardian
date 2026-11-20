# Saturn Vanguard

A retro 2D run-and-gun platformer in a single HTML file. No build step: open `saturn_vanguard.html` in a browser.

**▶ Play in your browser:** https://allangsilva97.github.io/saturn-vanguard/ (keyboard required). Pick an edition:
- **64-bit Classic:** chunky 480×270 pixel art with CRT scanlines
- **128-bit Remastered:** 3× resolution, dynamic lighting, bloom, shadows, richer skies and more particles
- **256-bit Ultra:** 1080p rendering with everything in 128-bit plus mirror reflections, volumetric fog, a wide second bloom pass and denser particles

All editions are the same game with the same saves; cycle between them with the **GFX** button on the main menu.

**⬇ Windows download:** [latest release](https://github.com/allangsilva97/saturn-vanguard/releases/latest)

## Features
- **Skill first:** headshots are critical hits (+75%, sniper +150%), boss cores are weak points, and a dash that avoids a hit is a Perfect Dodge (+25% damage for 3s, dash refunded). Gear stat bonuses are deliberately small
- **Class abilities [F]:** Ranger's Hunter's Mark (every hit crits for 4 s), Sentinel's Barricade (a wall that blocks enemy shots for 6 s), Arcanist's Rift (regenerate and deal +20% damage while standing in it)
- **Checkpoints, no lives:** dying returns you to the last checkpoint and costs 15% of your score and 20% of the run's credits
- **Contractors:** Commander Vex (combat), Quartermaster Iro (salvage and exploration) and Seer Nyla (style and skill) each offer their own contracts. Accept up to 4; progress carries across stages and horde runs, and you claim credits, gold and a contractor bonus (gear, a sigil key or extra gold) back at the menu
- **Sealed chests & keys:** carry sealed chests home from the field; each opens only with a key of its own sigil (Ember, Frost, Storm, Umbra). Keys hide on ledges, drop from champions and come from Iro's contracts. Sealed loot takes the best of three rarity rolls
- **Gold & cosmetics:** clearing stages, contracts and sealed chests pays gold, spent on premium armor colours and weapon skins (some recolour your shots)
- **Horde mode:** endless waves in an arena with one life, a new world every 5 waves, elite waves with champions and loot, and a saved best wave
- **Difficulty:** Easy, Normal or Hard changes enemy health and damage, champion count, credits and loot odds
- **3 classes:** Ranger (double jump), Sentinel (hover, extra shield), Arcanist (glide, faster super)
- **3 elements:** Fire, Shock, Void. Match an enemy's shield colour to shatter it
- **4 worlds, 12 long stages:** Iron Yard, Crimson Dunes, Frozen Moon, Void Citadel, each ending in a boss, with 24–44 hostiles per stage
- **Champions:** random Barrier, Overload and Unstoppable variants (at most 2 types per stage), plus mid-stage warp-ins, each countered by its own weapon: Piercer Rifle, Arc Disruptor, Breacher Slug
- **Shuffled stages:** every run rebuilds each stage from randomly ordered modules (pits, climbs, lifts across wide gaps, elevator towers, secret bunkers)
- **Treasure & secrets:** ride elevators to tower-roof chests, find supply caches on lookouts, and walk through cracked false walls for secret stashes
- **Armor:** upgrade the helmet, gauntlets, chest, legs and class item separately, and paint each piece in the Paint Shop
- **Crouch to dodge:** level enemy shots fly over you while you crouch
- **Loot & gear levels:** chests drop weapons as Common (74%), Rare (20%), Legendary (5%) or Exotic (1%) items with perks; kills level them up to LV 20
- **Loadout:** every run starts with exactly three weapons, one primary, one special and one heavy, picked on the main menu. Primary ammo is infinite; special and heavy refill every stage and drop from enemies (15% / 9%)
- **Epic soundtrack:** an original score synthesized live (no audio files): a faster, heavier arrangement for boss fights and a different key per world
- **11 weapons:** Auto Rifle, SMG, Pulse Rifle, Hand Cannon, Shotgun, Sniper Rifle, Rocket Launcher, Fusion Rifle, plus the three anti-champion weapons

## Windows desktop app (.exe)
The `desktop/` folder wraps the game in Electron as three portable, fully offline exes, one per edition:

```bash
cd desktop
npm install
node node_modules/electron/install.js
npm run dist
```

This writes `SaturnVanguard-64bit.exe`, `SaturnVanguard-128bit.exe` and `SaturnVanguard-256bit.exe` to `desktop/release/` (`npm run dist:64`, `dist:128` or `dist:256` build just one). `npm start`, `npm run start:128` and `npm run start:256` run the app without packaging it. F11 toggles fullscreen.

The exes are not code-signed, so Windows SmartScreen asks for **More info → Run anyway**, and PCs with Windows 11 Smart App Control turned on may block them outright.

## Controls
| Key | Action |
|---|---|
| A / D | Move |
| Shift | Dash (invulnerable; one air dash per jump) |
| W / S | Aim up / crouch (aim down in the air) |
| J or Space | Jump (hold: Ranger double jump, Sentinel hover, Arcanist glide; S + Jump drops through ledges) |
| Mouse | Aim in any direction (crosshair) |
| Left click or K | Fire (hold) |
| 1 / 2 / 3 or mouse wheel | Primary / special / heavy weapon |
| R | Reload |
| Q (or right click) | Grenade |
| E | Melee |
| F | Class ability |
| T | Super |
| P / Esc | Pause (then M abandons the mission, keeping credits) |
