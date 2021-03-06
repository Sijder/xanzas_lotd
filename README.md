# Xanza's LOTD

- [Xanza's LOTD](#xanzas-lotd)
- [Preamble](#preamble)
- [Installation](#installation)
  - [Pre-Installation](#pre-installation)
    - [Installing Microsoft Visual C++ Redistributable Package](#installing-microsoft-visual-c-redistributable-package)
    - [Steam Config](#steam-config)
      - [Disable the Steam Overlay](#disable-the-steam-overlay)
    - [Change Steams Update Behavior](#change-steams-update-behavior)
    - [Set the Game language to English](#set-the-game-language-to-english)
    - [Clean Skyrim](#clean-skyrim)
    - [Start Skyrim](#start-skyrim)
  - [Using Wabbajack](#using-wabbajack)
    - [Preparations](#preparations)
    - [Downloading and Installing](#downloading-and-installing)
      - [Problems with Wabbajack](#problems-with-wabbajack)
  - [Post-Installation](#post-installation)
    - [Copy Game Folder Files](#copy-game-folder-files)
    - [Getting an ENB](#getting-an-enb)
- [Updating](#updating)
- [In Game MCM Options](#in-game-mcm-options)
- [Creating your Character](#creating-your-character)
- [FAQ](#faq)
  - [Ultrawide Options](#ultrawide-options)
  - [Tweaking Performance](#tweaking-performance)
    - [Tweaking the ENB](#tweaking-the-enb)
    - [Tweaking the Game Settings](#tweaking-the-game-settings)
- [Removing the Modlist](#removing-the-modlist)
- [Credits and Thanks](#credits-and-thanks)
- [Contact](#contact)
- [Contributing](#contributing)
- [Changelog](#changelog)

# Preamble

![xanzas-lotd-banner](cover/Cover.png)

This is a fork of Lexy's Legacy of the Dragonborn list with a few choice additions. Under no circumstances should you be bothering her or her team with issues for this list.

## Installation

### Pre-Installation

These steps are only needed if you install this Modlist for the first time. If you update the Modlist, jump straight to [Updating](#updating).

#### Installing Microsoft Visual C++ Redistributable Package

I doubt you need to do this since you likely already have this installed. The package is required for MO2 and you can download it from [Microsoft](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads). Download the x64 version under "Visual Studio 2015, 2017 and 2019". [Direct link](https://aka.ms/vs/16/release/vc_redist.x64.exe) if you can't find it.

#### Steam Config

##### Disable the Steam Overlay

The Steam Overlay can cause issues with ENB and is recommended to be turned off.

Open the Properties window (right click the game in your Library->Properties), navigate to the _General_ tab and un-tick the _Enable the Steam Overlay while in-game_ checkbox.

#### Change Steams Update Behavior

SSE is still being updated by Bethesda (they only add Creation Club content). Whenever the game updates, the entire modding community goes silent for the next one or two weeks because some mods need to be updated to the latest game runtime version.

To ensure that Steam does not automatically updates the game for you, head over to the Properties window, navigate to the _Updates_ tab and change _Automatic updates_ to _Only update this game when I launch it_. You should also disable the Steam Cloud while you're at it.

#### Set the Game language to English

Just do it. This entire Modlist is in English and 99% of all mods you will find are also in English. I highly recommend playing the game in English and **I will not give support to people with a non-English game**.

Open the Steam Properties window, navigate to the _Language_ tab and select _English_ from the dropdown menu.

#### Clean Skyrim

I highly recommend uninstalling the game through Steam, deleting the game folder and reinstalling it. You should also clean up the `Skyrim Special Edition` folder in `Documents/My Games/` by deleting the contents in it.

#### Start Skyrim

After you have done everything above and got a clean SSE installation ready, start the Launcher and open the _Options_ menu.

1. Click on _High_
2. Set the _Aspect Ratio_ and _Resolution_ to your monitor's native values
3. Set _Antialiasing_ to _Off_
4. Check _Windowed Mode_ and _Borderless_

Start the game and exit once you're in the main menu.

### Using Wabbajack

#### Preparations

Let's get to the actual installation. Grab the latest release of Xanza's LOTD from [the release tab](https://github.com/ixanza/xanzas_lotd/releases).

Download the release to a _working folder_. This folder **must not** be in a _common folders_ like your Desktop, Downloads or Program Files folder. It's best to create a Wabbajack folder near the root level of your drive like `C:/Wabbajack`.

Grab the latest release of Wabbajack from [here](https://github.com/wabbajack-tools/wabbajack/releases) and place the `Wabbajack.exe` file in the _working folder_.

#### Downloading and Installing

The download and installation process can take a very long time depending on your system specs. Wabbajack will calculate the amount of threads it will use at the start of the installation. To have the highest amount of threads and thus the fastest speed, it is advised to have the working folder on an SSD.

1. Open Wabbajack
2. Load the Modlist from Disk
3. Adjust the download and installation paths
4. Click the Go/Begin button
5. Wait for Wabbajack to finish

##### Problems with Wabbajack

There are a lot of different scenarios where Wabbajack will produce an error. I recommend re-running Wabbajack before posting anything. Wabbajack will continue where it left off so you loose no progress.

**Could not download x**:

If a mod updated and the old files got deleted, it is impossible to download them. In this case just wait till I update the Modlist.

**x is not a whitelisted download**:

This can happen when I update the modlist. Check if a new update is available and wait if there is none.

**Wabbajack could not find my game folder**:

Wabbajack will not work with a pirated version of the game. If you own the game on Steam, go back to the [Pre-Installation](#pre-installation) step.

### Post-Installation

#### Copy Game Folder Files

Download the latest ENB Series from [here](http://enbdev.com/download_mod_tesskyrimse.htm) and copy `d3d11.dll` and `d3dcompiler_46e.dll` to your game folder.

Copy the all of the files from the `MO2/Game Folder Files` directory into your game folder.

#### Getting an ENB

This list uses Cathedral Weathers so you want to get an ENB that is compatible. Here is a list of compatible ENBs that I can recommend
- [Ljoss](https://www.nexusmods.com/skyrimspecialedition/mods/30971)
- [Soul Spectrum](https://www.nexusmods.com/skyrimspecialedition/mods/29675)
- [Semirealis](https://www.nexusmods.com/skyrimspecialedition/mods/25163)
- [Silent Horizons](https://www.nexusmods.com/skyrimspecialedition/mods/21543)
- [SkyrimSE Re-Engaged ENB](https://www.nexusmods.com/skyrimspecialedition/mods/1089)
- [NVT](https://www.nexusmods.com/skyrimspecialedition/mods/11203)

Once you found a preset you like. Download it and extract the enbseries folder, enbseries.ini and enblocal.ini to your Skyrim Special Edition directory. 

**Note : Please check that vsync is set to disable in enblocal.ini otherwise you will be stuck compiling shaders**

## Updating

If this Modlist receives an update please check the Changelog before doing anything. Always backup your saves or start a new game after updating.

**Wabbajack will delete all files that are not part of the Modlist when updating!**

This means that any additional mods you have installed on top of the Modlist will be deleted. Your downloads folder will not be touched!

Updating is like installing. You only have to make sure that you select the same path and tick the _overwrite existing Modlist_ button.

## In-Game MCM Options
Once the game has loaded. Wait until there are no more messages on the top left corner. Then you can hit escape and click on Mod Configuration to continue this section.

#### A Matter of Time
- Presets :
  - Load user settings

#### All Geared up Derivative
- Misc. Player :
  - Enable Misc. Item Display : Disabled
- NPC :
  - Enable Weapons : Enabled
  - Enable Misc. Item Display : Disabled

#### Cathedral Weather
- Settings → General :
  - Configuration Spell: Disabled
- Settings → Weather :
  - Seasonal Perspective: Enabled

#### Complete Crafting
- Recipe Display → Crafting Menu Filters :
  - Crafting Categories: Disabled
  - Item Filters : Disabled
  - Breakdown Recipes: Enabled   
- Crafting Options → Additional Items: :
  - Artifact Replicas : Enabled
  - Matching Circlets : Enabled
- Learning & XP → Smithing Experience:
    - Tanning Rack : 0.1
    - Smelter : 0.2
    - Mining : 20
- Learning & XP → Learn to Craft :   
  - Learning Points required to Craft : 250
- Mining  and Materials → Mining :
  - Mining Presets : FASTER MINING
- Mining  and Materials → Firewood :
  - Firewood per chop : 6
  - Max per activation : 1

#### Deadly Dragons
- Dragons → Presets :
  - Difficulty: Expert
- Dragons → Special :
  - Knockdown: Disabled

#### Diverse Dragons Col. 3
- Dragons
  - Nether Dragon : Disabled
  - Sanguine Dragon : Disabled
  - Vile Dragon : Disabled
  
**Note : Exit the MCM after this step to allow it to do its thing**

#### Easy Wheel
- General → Mode selection :
  - Use Swap mode : Enabled
  - Show : M5 (Or whatever hotkey you like)
  - Next : Arrow Right Key (Or whatever hotkey you like)
  - Previous : Arrow Left Key (Or whatever hotkey you like)
- Available Functions → Loaded Mods :
  - Heathfire Multi Kid Adoption: Hidden
  - Dovahkiin's Relax: Hidden
  - Simple Action: Hidden
- Configuration → Wheel Layout :
  - Current Wheel : 2
  - 1: Horses Whistle
  - 2: Horse Call
  - 3: Pray

#### Expanded Towns
- Settings → Fortification Wall :
  - Dawnstar : Disabled
  - Falkreath : Disabled
  - Morthal : Disabled
  - Winterhold : Disabled

#### Farmhouse Chimneys
- Mod Support → Arthmoor Village Options :
  - Enable all **EXCEPT** Falkreath
- Mod Support → New Villages :
  - Helarchen Creek : Enabled
  - Oakwood : Enabled
- Mod Support → Misc Mods :
  - Cutting Room Floor : Enabled
- Mod Support → Mod Compatibility :
  - Expanded Towns and Cities : Enabled

#### Follower Framework
 - System → Save/Load Configuration : 
  - Load from File : Click

#### Frostfall
**Note : DO NOT ACTIVATE FROSTFALL UNTIL AFTER YOU EXIT THE CAVE IN HELGEN IF YOU ARE PLAYING THE VANILLA START.**

- Overview → Frostfall Status :
  - Frostfall Is: Enabled (This will require you to exit and wait until you see the message "Done! Frostfall is enabled")
- Profiles → Settings Profiles :
  - Current Profile : Lexy LOTD Profile (Re-select this)

#### Immersive Armors
- Armor Options → Distribution : 
  - Barbarian Hero Armor : Disabled

- Extra Options → Special Distribution Options :
  - Varied Guard Helmets : Disabled
  
**Note : Exit the MCM and wait for it to say  "Immersivie Armors Configuration has Finished". Takes about 30 seconds**

#### Immersive Creatures
- General → General : 
  - Select Version Preset: Purist - No Spiders
- Additional Spawns → Spawn Types
  - Animals Spawns : Disabled
  - Ore Guardian Spawns: Disabled
- Night Spawns → Spawn Time : 
  - Start : 19 PM
  - End : 6 AM
- Random Event Spawns : 
  - Random Event Spawns : Deactivated
- Difficulty Adjustments → Global Difficulty : 
  - Assign Global Difficulty: Adept
- Difficulty Adjustments → Creature Spawn Difficulty : 
  - Additional Spawns : Medium

#### Keep It Clean
- Settings → Parameters :
  - Soap Buff Duration : 9
  - Duration before becoming Dirty : 48
  - Duration before becoming Very Dirty : 72
- Settings → Toggles :
  - Start Keep It Clean: Enabled
  
**Note : Exit the MCM to let it start up properly**

#### LOTD Settings
- LOTD Settings → General → Shippment Crate Locations : 
  - Carriages: Enabled
  - Inns: Enabled
  - Player Houses: Enabled

#### Lock Overhaul
- General : 
  - Activate Lock Overhaul: Enabled (This will require you to exit and reload the MCM)
- General → General Settings : 
  - Allow increasing skill : Enabled
  - Enable the sound effect : Enabled
  - Enable Crime: Enabled
- Smash Locks → Smash Locks : 
  - Activate Smash Locks: Enabled
  - Allow Weapons : Two + One Handed
- Unlock with Magic → Unlock Spell :
  - Enable Unlock Spell : Enabled
  - Frost effect Required Skill malus: -0

#### Moonlight Tales
- General : 
  - Transform Back Stagger: Disabled
  - Werewolf Loot: Disabled
- Appearance : 
  - Werewolf Appearance: Alpha (Black with Red Eyes)
  
#### Not So Fast MG
- Minimum Days Before Event : 
  - Saarthal Expedition : 3
  - Psijic Monk Visi t: 7
  - Brelyna's Practice : 4
  - J'Zargo's Experiment : 4
  - Onmund's Request : 4

#### Not So Fast MQ
- Minimum Days Before Events :
  - First Dragon Sighting : 3
  - Note From Delphine : 6
- Other :
  - No Negotiations : Enabled

#### OBIS - Patrols
- Settings → Bandit Patrols :
  - Enable? : Enabled

#### Predator Vision
- Predator Vision → Settings :
  - Nightvision Color : 30%
  - Predator Vision Color Boost : 70%   

#### Quick Light
- Quick Light → Brightness :
  - Brightness - Bright

#### Realistic Needs
- Basic Needs → Start RND

**Note : Exit the MCM to let it start up properly**

#### Realistic Water Two
- Mod Options → Blacksmith Forge Water :
  - The Fall of Granite Hill : Enabled
  - Kynesgrove : Enabled
  - Rorikstead : Enabled
  - Expanded Towns and Cities SSE : Enabled

#### SkyUI
- General → Item List :
  - Font Size : Small
  - Category Icon Theme : CELTIC
- Advanced → SWF Version Checking : 
  - Map Menu : Disabled
  - Favorites Menu : Disabled
  - Inventory Menu : Disabled
  - Barter Menu : Disabled
  - Container Menu : Disabled
  - Crafting Menu : Disabled

#### Storm Lightning
- Preset → Load Preset : 
  - Realistic : Enabled
- Settings → Fork Lightning : 
  - Minimum Fork Distance : 1

#### Thieves Guild Requirements
- Main Quest → Requirements to Begin Recruitment Quest :
  - Sneak : 25
  - Items Stolen : 250

- Main Quest → Requirements to Begin 3rd Quest :
  - Radiant Jobs Completed : 20
  - Randomize : Enabled
  - Sneak Skills : 35
- Main Quest → Requirements to Begin 4th Quest :
  - Radiant Jobs Completed : 40
  - Sneak Skills : 45
- Radiant Quests → Radiant Job Options : 
  - Bedlam Job : 500
- Radiant Quests → City Influence Quests :
  - Randomize : Enabled
- Misc Options → Unusual Gems :
  - Selling Price : 50
  - Cost Multiple to Buy : x 20
- Misc Options → Shadowmarks :
  - Require City Quest : Enabled
  - Use Loot mark : Enabled
  
#### Timing is Everything
- DLC Quests → Dawnguard :
  - Enabled Vampire Attacks : Enabled
  - Vampire Attacks : 30
  - Dawnguard Recruitment : 30
  - Disgused Vampire Chance : 30
  - Scouting Party Chance : 35
  - Eclipse Attack Chance : 0
  - Min Days Between Attacks : 5
  - Max Days Between Attacks : 20
-DLC Quests → Hearthfire :
  - Minimum Level : 20
- DLC → Dragonborn :
  - After The Horn of Jurgen Windcaller
  - Minimum Level : 50
  - Cultist Attack Chance : 25
- Other Quests → Daedric Quest :
  - The Cursed Tribe : 25
  - The Break of Dawn : 45
  - The Break of Dawn: No Vampires : Enabled
  - The Only Cure : 40
  - A Night to Remember : 30
  - Discerning the Transmundane : 60
  - The Whispering Door : 40
  - Pieces of The Past : 35
  - Boethiah's Calling : 40
-Other Quests → Misc Quest :
  - The Wolf Queen Awakened : 47
  - Unfathomable Depths : 32
  - Grimsever's Return : 32
  - Kill The Giant : 22
  - Dungeon Delving : 30
  - Kill the Vampire : 30
  - Deathbrand : 36
  - Ebony Warrior : 75
- Extra Options → World Encounters :
  - Werewolf Encounters : Enabled
  - Thalmor Squard : Min Level: 10
  - Hired Thugs: Stolen Item Value : 300
  - Hired Assassin Min Level : 15
  - Hired Assaults : 0
  - Hired Assassin: Murders : 0
  - Bounty Collector: Required Bounty : 1500
  - Bounty Collector Chance : 25
  - Letter from a Friend : Disabled
- Extra Options → Dragon Attacks :
  - Min Days Between Attacks : 3
  - Dragon Attack Chance : 100
  
#### Trade and Barter
- Trade & Barter → Settings :
  - Modify Barter Setting : Enabled
- Trade & Barter → Preset : 
  - Barter Presets : Medium

#### Ultimate Combat
- General → Timed Block : 
  - Effective Time : 0.00s
  - Blur Strength : 0.0s
- General → Game Balance Settings : 
  - Speed Bonus : Disabled
- General → Others :
  - Swing Effect : Disabled
- General → Stagger : 
  - Enemy Pose : Disabled
  - Player Stagger : Disabled
  - NPC's Bow Poise : 0.00s
  - Player Bow Poise : 0.00s
- General → Locational : 
  - Headshot Damage Mult : 0.0
  - Headshot Message : Disabled
  - Locational Damage Sound : Disabled
  - Locational Damage Effect : Disabled
- NPC Settings → Giant : 
  - Max HP Scale : Max HP 1.0
- NPC Settings → Dwarven Centurion : 
  - HP Mult : HP 1.0
- NPC Settings → Dragon Priest : 
  - HP Mult : HP 1.0
  
#### VioLens
- Profile System → Menu Settings : 
  - Load : LEXY LOTD VIOLENS
  
## Creating your Character

Simply step up to the statue of mara and choose a start.

## FAQ

### Ultrawide Options
If you have an ultrawide monitor (21:9), the UI will be off. You will want to download the following mods from [here](https://www.nexusmods.com/skyrimspecialedition/mods/1778). Place them below More Informative Console on the left pane.
- Whichever main file applies to your monitor resolution
- The following optional files
  - Better Dialogue Control Widescreen Fix
  - Better MessageBox Control Widescreen Fix
  - Campfire 1.12.1 and Frostall 3.4.1SE - Unofficial SSE Widescreen Fix
  - Experience - Widescreen fix
  - Widescreen Fix for SkyUI SE - Flashing Savegames FIx
  - Wider MCM Menu for SkyUI - Widescreen Fix


### Tweaking the Game Settings

I highly recommend using [BethINI](https://www.nexusmods.com/skyrimspecialedition/mods/4875) which is included in this Modlist (can be found in `MO2/tools/BethINI`). I recommend tweaking the `Detail` section for more FPS:

- `Shadow Resolution`: Very big one. A good balance is `2048` which is the borderline between high FPS drainage and garbage looking shadows.
- `Ambient Occlusion`: Highly recommended to turn either this or your ENB version off. Do not have the game AO and an ENB AO turned on at the same time.
- `Remove Shadows`: If you really struggle, use this. This will disable all Shadows (not recommended)

## Removing the Modlist

You can just remove the MO2 folder and be done with it. SKSE and ENB files will still be in your game folder so I recommend using [ENB and ReShade Manager](https://www.nexusmods.com/skyrimspecialedition/mods/4143) if you want to remove the ENB.

## Credits and Thanks

- _YOU_ for actually reading the readme. Thanks a ton!!
- Darkladylexy and her team - for creating this incredible guide and allowing me to create this fork
- erri120 & jdsmith2816 - Repository template
- Halgari and everyone the WJ Team - Wabbajack is awesome and so are you

## Contact

While I'm always available on the [Wabbajack Discord](https://discord.gg/wabbajack), I would advise checking the [Issues](https://github.com/ixanza/xanzas_lotd/issues) (open **and** closed ones) on GitHub first if you have any problems. The same goes for _Enhancements_ or _Feature/Mod Requests_. **DO NOT DM ME ON DISCORD. I WILL NOT PROVIDE SUPPORT FOR YOU IN DMS AND I WILL BLOCK YOU**.

## Contributing

See [Contributing](CONTRIBUTING.md).

## Changelog

See [Changelog](CHANGELOG.md).
