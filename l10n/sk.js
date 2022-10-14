OC.L10N.register(
    "memories",
    {
    "Memories" : "Spomienky",
    "Yet another photo management app" : "Ďalšia aplikácia na správu fotografií",
    "# Memories\n\n* **📸 Photo and Video Timeline**: Sorts photos by date taken, parsed from Exif data.\n* **🤔 Quick Recap**: Jump to anywhere in the timeline instantly.\n* **🖼️ Folders**: Browse your and shared folders with a similar, efficient timeline.\n* **🤖 AI Tagging**: Group photos by people and objects using AI, powered by the [recognize](https://github.com/nextcloud/recognize) app.\n* **🎦 Slideshow**: View photos from your timeline and folders easily.\n* **📱 Mobile Support**: Relive your memories on devices of any shape and size through the web app.\n* **✏️ Edit Metadata**: Edit Exif dates on photos quickly and easily.\n* **📦 Archive**: Store photos you don't want to see in your timeline in a separate folder.\n* **⚡️ Fast**: Memories is extremely fast. Period.\n\n## 🚀 Installation\n\n1. Install the app from the Nextcloud app store\n1. ⚒️ Install `exiftool` (see below).\n1. Run `php ./occ memories:index` to generate metadata indices for existing photos.\n1. Open the 📷 Memories app in Nextcloud and set the directory containing your photos. Photos from this directory will be displayed in the timeline, including any photos in nested subdirectories.\n1. Installing the [preview generator](https://github.com/rullzer/previewgenerator) for pre-generating thumbnails is strongly recommended.\n\n## 🔨 Installing Dependencies\nThe exact steps depend on your Nextcloud platform. If you use Docker for your Nextcloud instance, you can install Exiftool by using a custom docker image.\n- **Ubuntu/Debian**: `sudo apt install libimage-exiftool-perl`\n- **Fedora**: `sudo dnf install perl-Image-ExifTool`\n- **Arch Linux**: `sudo pacman -S perl-image-exiftool`\n- **Alpine**: `apk add --no-cache exiftool`\n- **MacOS**: `brew install exiftool`\n- **FreeBSD**: `sudo pkg install p5-Image-ExifTool`" : "# Spomienky\n\n* **📸 Časová os fotografií a videí**: Zoraďte fotografie podľa dátumu zhotovenia, analyzuje sa z údajov Exif.\n* **🤔 Rýchla rekapitulácia**: Okamžitý skok kamkoľvek na časovej osi.\n* **🖼️ Priečinky**: Prehliadajte svoje a zdieľané priečinky s podobnou a efektívnou časovou osou.\n* **🤖 AI Tagging**: Zoskupujte fotografie podľa ľudí a predmetov pomocou AI, ktorá je založená na aplikácii [recognize](https://github.com/nextcloud/recognize).\n* **🎦 Prezentácia**: Jednoduché zobrazenie fotografií z časovej osi a priečinkov.\n* **📱 Mobilná podpora**: Oživte svoje spomienky na zariadeniach akéhokoľvek tvaru a veľkosti prostredníctvom webovej aplikácie.\n* **✏️ Upraviť metadáta**: Upravte dátumy Exif na fotografiách rýchlo a jednoducho.\n* **📦 Archív**: Uložte si fotografie, ktoré nechcete vidieť na časovej osi, do samostatného priečinka.\n* **⚡️ Rýchle**: Spomienky sú extrémne rýchle. Obdobie.\n\n## 🚀 Inštalácia\n\n1. Nainštalujte aplikáciu z obchodu s aplikáciami Nextcloud\n1. ⚒️ Nainštalujte si `exiftool` (pozri nižšie).\n1. Spustite `php ./occ memory:index` a vygenerujte indexy metadát pre existujúce fotografie.\n1. Otvorte aplikáciu 📷 Memories v Nextcloud a nastavte adresár obsahujúci vaše fotografie. Fotografie z tohto adresára sa zobrazia na časovej osi vrátane všetkých fotografií vo vnorených podadresároch.\n1. Dôrazne sa odporúča nainštalovať [generátor ukážok](https://github.com/rullzer/previewgenerator) na predbežné generovanie miniatúr.\n\n## 🔨 Inštalácia závislostí\nPresné kroky závisia od vašej platformy Nextcloud. Ak používate Docker pre svoju inštanciu Nextcloud, môžete nainštalovať Exiftool pomocou vlastného obrazu dockeru.\n- **Ubuntu/Debian**: `sudo apt install libimage-exiftool-perl`\n- **Fedora**: `sudo dnf install perl-Image-ExifTool`\n- **Arch Linux**: `sudo pacman -S perl-image-exiftool`\n- **Alpine**: `apk add --no-cache exiftool`\n- **MacOS**: `brew install exiftool`\n- **FreeBSD**: `sudo pkg install p5-Image-ExifTool`",
    "Timeline" : "Časová os",
    "Folders" : "Priečinky",
    "Favorites" : "Obľúbené",
    "Videos" : "Videá",
    "People" : "Ľudia",
    "Archive" : "Archív",
    "On this day" : "V tento deň",
    "Tags" : "Štítky",
    "Settings" : "Nastavenia",
    "Edit Date/Time" : "Upraviť Dátum/Čas",
    "Update Exif" : "Aktualizovať Exif",
    "Newest" : "Najnovšie",
    "Year" : "Rok",
    "Month" : "Mesiac",
    "Day" : "Deň",
    "Time" : "Čas",
    "Hour" : "Hodina",
    "Minute" : "Minúta",
    "Oldest" : "Najstaršie",
    "Processing … {n}/{m}" : "Spracúvam ... {n}/{m}",
    "This feature modifies files in your storage to update Exif data." : "Táto funkcia upravuje súbory vo vašom úložisku a aktualizuje údaje Exif.",
    "Exercise caution and make sure you have backups." : "Buďte opatrní a uistite sa, že máte zálohy.",
    "Loading data … {n}/{m}" : "Nahrávanie údajov ... {n}/{m}",
    "Remove person" : "Odstrániť osobu",
    "Are you sure you want to remove {name}" : "Naozaj chcete odstrániť {name}",
    "Delete" : "Vymazať",
    "Failed to delete {name}." : "Nepodarilo sa zmazať {name}.",
    "Rename person" : "Premenovať osobu",
    "Name" : "Meno",
    "Update" : "Aktualizovať",
    "Failed to rename {oldName} to {name}." : "Nepodarilo sa premenovať {oldName} na {name}.",
    "Merge {name} with person" : "Zlúčiť {name} s osobou",
    "Cancel" : "Zrušiť",
    "Are you sure you want to merge {name} with {newName}?" : "Naozaj chcete zlúčiť {name} s {newName}?",
    "Too many failures, aborting" : "Príliš veľa zlyhaní, prerušujem",
    "Error while moving {basename}" : "Chyba pri presúvaní {basename}",
    "Failed to move {name}." : "Nepodarilo sa presunúť {name}.",
    "Back" : "Späť",
    "Merge with different person" : "Spojiť s inou osobou",
    "Cannot find this photo anymore!" : "Túto fotografiu už nemožno nájsť!",
    "Timeline Path" : "Popis umiestnenia časovej osi",
    "Show hidden folders" : "Zobraziť skryté priečinky",
    "Error updating settings" : "Chyba pri aktualizácii nastavení",
    "Download" : "Sťahovanie",
    "Favorite" : "Obľúbené",
    "Unarchive" : "Vybrať z archívu",
    "View in folder" : "Zobraziť v priečinku",
    "Remove from person" : "Odobrať z osoby",
    "Your Timeline" : "Vaša časová os",
    "Failed to load some photos" : "Načítanie akýchkoľvek fotiek zlyhalo",
    "You are about to download a large number of files. Are you sure?" : "Chystáte sa stiahnuť veľké množstvo súborov. Si si istý?",
    "You are about to delete a large number of files. Are you sure?" : "Chystáte sa odstrániť veľké množstvo súborov. Si si istý?",
    "You are about to touch a large number of files. Are you sure?" : "Chystáte sa zmeniť veľké množstvo súborov. Si si istý?",
    "_{n} selected_::_{n} selected_" : ["{n} vybraté","{n} vybraté","{n} vybratých","{n} vybraté"],
    "Failed to delete files." : "Nepodarilo sa zmazať súbory.",
    "Failed to delete {fileName}." : "Nepodarilo sa zmazať {fileName}.",
    "General Failure" : "Všeobecné zlyhanie",
    "Error: {msg}" : "Chyba: {msg}",
    "Failed to favorite {fileName}." : "Nepodarilo sa pridať súbor {fileName} medzi obľúbené.",
    "Failed to favorite files." : "Nepodarilo sa pridať súbory medzi obľúbené."
},
"nplurals=4; plural=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);");
