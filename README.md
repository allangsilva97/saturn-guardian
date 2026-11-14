# Saturn Vanguard

A retro 2D run-and-gun platformer in a single HTML file. No build step: open `saturn_vanguard.html` in a browser.

**▶ Play in your browser:** https://allangsilva97.github.io/saturn-vanguard/ (keyboard required)

**⬇ Windows download:** [latest release](https://github.com/allangsilva97/saturn-vanguard/releases/latest)

## Features
- **3 classes:** Ranger (double jump), Sentinel (hover, extra shield), Arcanist (glide, faster super)
- **3 elements:** Fire, Shock, Void. Match an enemy's shield colour to shatter it
- **4 worlds, 12 stages:** Iron Yard, Crimson Dunes, Frozen Moon, Void Citadel, each ending in a boss
- **7 weapons:** Auto Rifle, SMG, Pulse Rifle, Hand Cannon, Shotgun, Sniper Rifle, Rocket Launcher
- **Armory:** spend credits on weapons and upgrades; progress is saved in the browser

## Windows desktop app (.exe)
The `desktop/` folder wraps the game in Electron as a portable, fully offline `SaturnVanguard.exe`:

```bash
cd desktop
npm install
node node_modules/electron/install.js
npm run dist
```

The exe is written to `desktop/dist/SaturnVanguard.exe`. `npm start` runs the app without packaging it. F11 toggles fullscreen.

## Controls
| Key | Action |
|---|---|
| A / D | Move |
| W / S | Aim up / crouch (aim down in the air) |
| J or Space | Jump (hold for class ability; S + Jump drops through ledges) |
| K | Fire (hold) |
| Q / E or 1–7 | Switch weapon |
| R | Reload |
| L | Melee |
| I | Grenade |
| O | Super |
| P / Esc | Pause |
