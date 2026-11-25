# Saturn Guardian

*Formerly Saturn Vanguard. Saves carry over.*

A retro 2D run-and-gun platformer in a single HTML file. No build step: open `saturn_guardian.html` in a browser.

**▶ Play in your browser:** https://allangsilva97.github.io/saturn-guardian/ on a computer (keyboard and mouse) or a phone or tablet (touch). Pick an edition:
- **64-bit Classic:** chunky 480×270 pixel art with CRT scanlines
- **128-bit Remastered:** 3× resolution, dynamic lighting, bloom, shadows, richer skies and more particles
- **256-bit Ultra:** 1080p rendering with everything in 128-bit plus mirror reflections, volumetric fog, a wide second bloom pass and denser particles

All editions are the same game with the same saves; cycle between them with the **GFX** button on the main menu.

**📱 Phones and tablets:** open the site, turn the phone sideways and play with on-screen controls. Use **Add to Home screen** (Android Chrome or iPhone Safari) to install it as a full-screen app that also works offline. The 64-bit edition runs best on most phones.

**⬇ Windows download:** [latest release](https://github.com/allangsilva97/saturn-guardian/releases/latest)

## Features
- **Skill first:** headshots are critical hits (+75%, sniper +150%), boss cores are weak points, and a dash that avoids a hit is a Perfect Dodge (+25% damage for 3s, dash refunded). Gear stat bonuses are deliberately small
- **3 classes, chosen before a run:**
  - **Ranger:** agile and stealthy, built for mobility, precision and burst damage (+15% critical damage). Double and triple jump. Class ability: a dodge (Marksman's reloads every weapon, Gambler's recharges your melee) that also makes enemies lose track of you; crouching keeps distant enemies from spotting you
  - **Sentinel:** frontline fighter with toughness (15% less damage taken) and heavy melee (+60%, big knockback). Its jump is a jet thruster that glides in a straight line. Class ability: a Towering Barricade that blocks shots, or a low Rally Barricade that reloads your weapons
  - **Arcanist:** the mage, focused on ability uptime and support: faster grenade, ability and super. Long glide. Class ability: a Healing Rift or an Empowering Rift (+30% damage)
- **Origin:** play as a Human (man, woman or other), a Machine (a rebel AI: man, woman or asexual) or a Being of Light (man, woman or asexual). Each has its own look and lore
- **Lives and checkpoints:** each stage starts with 3 lives on Easy, 2 on Normal and 1 on Hard, and every champion you defeat grants one more. Abandoning or restarting the mission resets them. Losing one returns you to the last checkpoint and costs 15% of your score and 20% of the run's credits; losing the last one fails the mission (credits from kills are kept)
- **Contractors:** Commander Vex (combat), Quartermaster Iro (salvage and exploration) and Seer Nyla (style and skill) each offer their own contracts. Accept up to 4; progress carries across stages and horde runs, and you claim credits, gold and a contractor bonus (gear, a sigil key or extra gold) back at the menu
- **Sealed chests & keys:** carry sealed chests home from the field; each opens only with a key of its own sigil (Ember, Frost, Storm, Umbra). Keys hide on ledges, drop from champions and come from Iro's contracts. Sealed loot takes the best of three rarity rolls
- **Shop:** on the main menu (top and bottom) and the results screen, with tabs for weapons, armor upgrades and paint, weapon skins, sealed chests and your weapons
- **Infusion and dismantling:** found a stronger weapon? Infuse it into one you like (same slot): yours rises to its level and keeps its perks and skin, for 75 credits per level. The game points out stronger drops and the results screen offers to infuse them. Dismantle weapons you no longer want for gold
- **Gold & cosmetics:** clearing stages, contracts and sealed chests pays gold, spent on premium armor colours and weapon skins (some recolour your shots)
- **Secret stage: Nimays Sanctum.** Find the Echo Shard hidden in a secret bunker in 4-2 Hall of Echoes (or finish the campaign) to unlock Nimays, a 500,000 HP boss. She stays immune until you solve her puzzle: watch the order in which she lights her four sigil crystals, then shoot them in that order (in reverse below 25% HP). A wrong crystal or running out of time punishes you. Each solve shatters her ward and opens a short window where your hits are amplified, and every ward adds a step to the next sequence. Beating her pays an Exotic, a key of every sigil and 30 gold
- **Local co-op (2 players):** turn on **2 PLAYERS** in the menu and a second Guardian joins on the same screen, for the campaign and Horde mode. Player 2 picks their own class, subclass and origin (orange helmet) and shares your loadout and armor. Each player picks **KEYBOARD + MOUSE** or **GAMEPAD**. If both pick a gamepad, each gets their own, in player order. If one picks the keyboard, they get the whole keyboard and the mouse. If both pick the keyboard, Player 1 uses the left keys and Player 2 the arrows and number pad (a second keyboard works too, with those keys), and you choose who aims with the mouse: a computer sees every mouse as the same cursor, so only one player can use it. A player whose gamepad isn't connected plays on the keyboard until it is. The camera keeps both of you in frame, each enemy goes after the nearest Guardian, and bosses switch targets every 6 s. Lives are shared: while your partner is standing you go down instead, and come back beside them 3 s later; with no lives left you stay down until a champion falls (in Horde mode, until the next wave). Enemies have 25% more health in co-op and bosses 50% more
- **Online co-op (beta):** play with a friend over the internet. One player clicks **HOST A ROOM** and gets a 6-character code; the other types it under **JOIN**. The host runs the game: their screen and sound stream live to Player 2, and Player 2's controls (keyboard and mouse, or a gamepad) stream back. Player 2 plays their own Guardian (class, subclass, origin, loadout and armor from their own save), can join mid-mission, and earns the mission's credits and gold in their own save. Rooms are matched through the free PeerJS server; the game then flows directly between the two computers, or through PeerJS's relay when a network blocks direct connections. Both players need an internet connection and the same version of the game; the host's window has to stay open and visible for the stream to keep running
- **Screen size:** on a computer browser, **SCREEN** in the menu switches between NORMAL (up to 960 px wide), LARGE (as big as the window allows) and FULL (fills the window and goes full screen). In the desktop app, **WINDOW** picks the game area's resolution (960×540, 1280×720, 1600×900, 1920×1080, 2560×1440 or 3840×2160, whichever fit your screen) or full screen, and remembers it
- **Controls menu:** **CONTROLS** (main menu, or the inventory mid-mission) remaps every action: two keys each for Player 1 and for Player 2 (local co-op), and one gamepad button each. Click a slot and press the key or button; binding a key that's already in use moves it. Saved on that computer, apart from the save. The mouse, the sticks, the D-pad and Esc stay fixed
- **Player 2's inventory:** in local co-op, Player 2 has their own weapons (from the shared inventory), subclass and class ability version: open it with **P2 INVENTORY** in the co-op panel, the **PLAYER 2** tab of the inventory, or Player 2's inventory key (Numpad +). Changes mid-mission apply right away, and changing subclass resets only Player 2's charges. Online, Player 2 opens their own inventory on their computer (their inventory key) and the host applies the changes when they close it
- **Gamepad:** also works solo (Player 1 takes the first gamepad)
- **Horde mode:** endless waves in an arena with one life, a new world every 5 waves, elite waves with champions and loot, and a saved best wave
- **Difficulty:** Easy, Normal or Hard changes the number of enemies, their health and movement speed, the damage you take, champion count, credits and loot odds
- **4 subclasses:** Fire, Shock, Void and Stasis. Your element; match an enemy's shield colour to shatter it. Stasis chills what it hits, slowing enemies until they freeze (frozen enemies take 30% more damage)
- **8 worlds, 41 stages (4 to 6 per world):** Iron Yard, Crimson Dunes, Frozen Moon, Void Citadel, Verdant Maw, Molten Forge, Tempest Reach and the Astral Throne, each ending in a boss
- **Boss fights with their own rules in the new worlds:**
  - **Thorn Queen:** her heart is sealed until you destroy her three spore pods; thorns erupt from the floor and thorn hounds join below half health
  - **Forgemaster:** armored (20% damage) until he overheats; hitting his furnace core heats him up, and when the forge floods with slag only the ledges are safe
  - **Tempest Titan:** shielded until you shoot down one of his homing storm orbs; lightning strikes and gales push you around
  - **The Arbiter:** only his ward's current element really hurts him (change subclass in the inventory), his prism beam sweeps the floor (dash through it), and he ascends at 66% and 33%
- **A changing map:** each later stage of a world is rougher and darker, with more pits and height changes; from the second stage ledges crumble under you (and come back later), and from the third debris falls from above
- **Automatic weapons:** Riflemen fire 8-round bursts, Skirmishers spray SMG fire while keeping to mid range, and the heavy Ravager spins up its minigun (watch the barrel glow) before a long stream that tracks you
- **Cover and hiding:** low walls to crouch behind (they stop enemy shots) and open shelters to stand in; hidden, enemies lose track of you until you fire
- **Champions:** random Barrier, Overload and Unstoppable variants (at most 2 types per stage), plus mid-stage warp-ins, each countered by its own weapon: Piercer Rifle, Arc Disruptor, Breacher Slug
- **Shuffled stages:** every run rebuilds each stage from randomly ordered modules (pits, climbs, lifts across wide gaps, elevator towers, secret bunkers)
- **Treasure & secrets:** ride elevators to tower-roof chests, find supply caches on lookouts, and walk through cracked false walls for secret stashes
- **Armor:** upgrade the helmet, gauntlets, chest, legs and class item separately, and paint each piece in the Paint Shop
- **Crouch to dodge:** level enemy shots fly over you while you crouch
- **Loot & gear levels:** chests drop weapons as Common (74%), Rare (20%), Legendary (5%) or Exotic (1%) items with perks; kills level them up to LV 20
- **Inventory [I / Tab]:** a full-screen menu, from the main menu, the results screen or mid-mission (it pauses the game), to pick the weapon in each slot, review your armor, pick your class ability version, and change subclass (Fire, Shock, Void or Stasis; your class stays fixed for the run). Swapping weapons mid-mission keeps your ammo reserves; changing subclass mid-mission resets your grenade, melee, class ability and super, which recharge from zero
- **Loadout:** every run starts with exactly three weapons, one primary, one special and one heavy, picked on the main menu. Primary ammo is infinite; special and heavy refill every stage and drop from enemies (15% / 9%)
- **Epic soundtrack:** an original score synthesized live (no audio files): a faster, heavier arrangement for boss fights and a different key per world
- **11 weapons:** Auto Rifle, SMG, Pulse Rifle, Hand Cannon, Shotgun, Sniper Rifle, Rocket Launcher, Fusion Rifle, plus the three anti-champion weapons

## Windows desktop app (.exe)
The `desktop/` folder wraps the game in Electron as three portable exes, one per edition. They run fully offline; only online co-op needs the internet:

```bash
cd desktop
npm install
node node_modules/electron/install.js
npm run dist
```

This writes `SaturnGuardian-64bit.exe`, `SaturnGuardian-128bit.exe` and `SaturnGuardian-256bit.exe` to `desktop/release/` (`npm run dist:64`, `dist:128` or `dist:256` build just one). `npm start`, `npm run start:128` and `npm run start:256` run the app without packaging it. F11 toggles fullscreen, and the **WINDOW** button in the menu picks the window size (saved in `display.json` next to the save).

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
| Q (or right click) | Grenade: hold to aim (mouse, W/S or the fire stick) and see its arc, release to throw |
| E | Melee |
| F | Class ability |
| I / Tab | Inventory (weapons, equipment, subclass) |
| T | Super: hold to aim, release to cast (Deadeye and Singularity fly along the aim; the Sentinel leaps along it and slams down where it lands) |
| P / Esc | Pause (then M abandons the mission, keeping credits) |

### Gamepad
| Button | Action |
|---|---|
| Left stick / D-pad | Move (up aims up, down crouches) |
| Right stick | Aim in any direction |
| RT | Fire (hold) |
| A | Jump (hold to glide) |
| B | Dash |
| X | Reload |
| Y | Super: hold to aim, release to cast |
| LB | Grenade: hold to aim, release to throw |
| RB | Melee |
| LT | Class ability |
| Back / View | Next weapon |
| Start / Menu | Pause |

### Player 2 on the keyboard (co-op)
When both players are on the keyboard, the arrow keys and number pad belong to Player 2; Player 1 keeps WASD and the other keys, and the mouse goes to whoever you chose.

| Key | Action |
|---|---|
| Arrow keys | Move and aim |
| Numpad 0 (or .) | Jump |
| Numpad 1 (or /) | Fire (hold) |
| Numpad 2 (or ,) | Dash |
| Numpad 3 (or ]) | Reload |
| Numpad 4 (or L) | Grenade (hold to aim) |
| Numpad 5 (or ;) | Melee |
| Numpad 6 (or ') | Class ability |
| Numpad 7 (or O) | Super (hold to aim) |
| Numpad 9 (or [) | Next weapon |
| Numpad + | Player 2's inventory |

The keys in brackets are by position on a US layout, for keyboards without a number pad. These are the defaults: every key and gamepad button can be changed in **CONTROLS**.

### Touch controls
| Control | Action |
|---|---|
| Left stick | Move (push up to aim up, down to crouch or aim down in the air) |
| Right stick (FIRE) | Hold to fire; drag to aim in any direction |
| JUMP | Jump (hold: double jump / hover / glide; left stick down + JUMP drops through ledges) |
| DASH, GREN, MELEE | Dash, grenade (hold and drag to aim), melee |
| SKILL, SUPER | Class ability, super (hold and drag to aim) |
| SWAP, RELOAD | Next weapon, reload |
| II | Pause (then RESUME or ABANDON) |
| INV | Inventory |
