/*
 * Havraspár — kolejní logika (interaktivní místnost, hádanka, balíčky, truhla, atd.)
 * Veškerá funkční logika je beze změny převzata z původního inline <script>.
 */

    const hp_u = "https://script.google.com/macros/s/AKfycbwLHcDIpNeGsE2_oT3Q3J41jnW-TmzjZVmyiYtxifOFDcaonxcFxAeAm2FauURnxBw/exec";

    const hp_r = [
   {"q": "Když mě máš, nevidíš mě. Když mě vidíš, nemáš mě. Co jsem?", "a": "život"},
    {"q": "Mluvím jen tehdy, když mluvíš ty. Co jsem?", "a": "ozvěna"},
    {"q": "Mám hlavu i patu, ale žádné tělo. Co jsem?", "a": "mince"},
    {"q": "Padám z nebe, nezraním se, létám bez křídel. Co jsem?", "a": "sníh"},
    {"q": "Jdu jen dopředu a nikdy zpět. Co jsem?", "a": "čas"},
    {"q": "Jsem vždy před tebou, ale nedohoníš mě. Co jsem?", "a": "budoucnost"},
    {"q": "Na boku jsem všechno, napůl nejsem nic. Co jsem?", "a": "osmička"},
    {"q": "Bez zámku a klíče skrývám zlatý poklad. Co jsem?", "a": "vejce"},
    {"q": "Rodím se velká, umírám malá. Co jsem?", "a": "svíčka"},
    {"q": "Čím víc mě čistíš, tím jsem špinavější. Co jsem?", "a": "voda"},
    {"q": "Čím víc si ze mě bereš, tím jsem větší. Co jsem?", "a": "díra"},
    {"q": "Mám mnoho zubů, ale nikdy nekoušu. Co jsem?", "a": "hřeben"},
    {"q": "Když mě potřebuješ, vyhodíš mě. Když mě nepotřebuješ, vrátíš mě zpět. Co jsem?", "a": "kotva"},
    {"q": "Vždy běžím, ale nikdy se nehýbu z místa. Co jsem?", "a": "řeka"},
    {"q": "Patřím tobě, ale ostatní mě používají častěji než ty. Co jsem?", "a": "tvé jméno"},
    {"q": "Co má tisíce očí, ale nevidí? Co jsem?", "a": "síto"},
    {"q": "Čím víc mě je, tím méně vidíš. Co jsem?", "a": "tma"},
    {"q": "Mám hrdlo, ale nemám hlavu. Mám tělo, ale nemám ruce. Co jsem?", "a": "láhev"},
    {"q": "Létám bez křídel a pláču bez očí. Co jsem?", "a": "mrak"},
    {"q": "Můžeš mě zlomit, aniž by ses mě dotkl. Co jsem?", "a": "slib"}
    ]; 

    const hp_sList = [
      {n:"Bubák", s:"Riddikulus", i:"ikony/duch.png"}, 
      {n:"Drak", s:"Konjunktivitus", i:"ikony/drak.png"}, 
      {n:"Ďasovec", s:"Relashio", i:"ikony/dasovec.png"}, 
      {n:"Had", s:"Vipera evanesca", i:"ikony/had.png"}, 
      {n:"Mozkomor", s:"Expecto patronum", i:"ikony/mozkomor.png"}, 
      {n:"Neživí", s:"Incendio", i:"ikony/nezivi.png"}, 
      {n:"Akromantule", s:"Arania exuma", i:"ikony/akromantule.png"}, 
      {n:"Rarach", s:"Imobilis", i:"ikony/rarach.png"}, 
      {n:"Salamandr", s:"Glacius", i:"ikony/salamander.png"}, 
      {n:"Skřítci", s:"Peskiwichtli pesternomi", i:"ikony/elf.png"}, 
      {n:"Vosa", s:"Vespa evanesca", i:"ikony/vosa.png"}, 
      {n:"Vlkodlak", s:"Transfingere", i:"ikony/vlkodlak.png"}, 
      {n:"Troll", s:"Wingardium leviosa", i:"ikony/troll.png"}
    ]; 

    const hp_pList = [
{n: "Lektvar Esence temnoty", r: "lektvary/lektvar_esencetemnoty.webp", d: "Po vypití navyšuje magickou vůli o jednu", t: "pos"},
  {n: "Andělský lektvar", r: "lektvary/lektvar_andelskylektvar.webp", d: "Po vypití způsobuje ochranu proti ztrátě energie na úplně nulovou hodnotu trvající do konce školního roku", t: "pos"},
  {n: "Lektvar Ohnivá slza", r: "lektvary/lektvar_ohnivaslza.webp", d: "Velmi jedovatý lektvar, snižuje energii na hranici smrti", t: "neg"},
  {n: "Lektvar Magické oko", r: "lektvary/lektvar_magickeoko.webp", d: "Po vypití navyšuje procentuální dovednost některého soubojového kouzla.", t: "pos"},
  {n: "Lektvar Magická hlubina", r: "lektvary/lektvar_magickahlubina.png", d: "Jedovatý lektvar, snižuje energii na hranici velké slabosti", t: "neg"},
  {n: "Lektvar Modrá slza", r: "lektvary/lektvar_modraslza.webp", d: "Léčivý lektvar, navyšuje dosti podstatně energii", t: "pos"},
  {n: "Lektvar Mistrova slza", r: "lektvary/lektvar_mistrovaslza.webp", d: "Po vypití navyšuje na přechodnou dobu úspěšnost cvičení některého soubojového kouzla", t: "pos"},
  {n: "Lektvar Sluneční svit", r: "lektvary/lektvar_slunecnisvit.webp", d: "Velmi posilující lektvar, zvyšuje velmi podstatně energii", t: "pos"},
  {n: "Lektvar neviditelnosti", r: "lektvary/lektvar_neviditelnosti.webp", d: "Způsobuje neviditelnost osoby do jedné hodiny noční", t: "pos"},
  {n: "Lektvar Fénixova slza", r: "lektvary/lektvar_fenixovaslza.webp", d: "Léčivý lektvar, obnovuje energii", t: "pos"},
  {n: "Lektvar Černá slza", r: "lektvary/lektvar_cernaslza.webp", d: "Mírně jedovatý lektvar, snižuje energii", t: "neg"},
  {n: "Lektvar Doušek síly", r: "lektvary/lektvar_douseksily.webp", d: "Nízkoenergetický lektvar, přidává menší množství energie", t: "pos"},
  {n: "Lektvar Medvědí oko", r: "lektvary/lektvar_medvedioko.webp", d: "Posilující lektvar, zvyšuje energii a sílu", t: "pos"}
    ]; 

    const hp_aList = [
      {n:"Očarovaný nůž", i:"https://bradavice.eu/obrazky/pu/nuz.jpg", d:"Otráví sladkosti, které pak budou energii odebírat namísto přidávání.", t:"neg"}, 
      {n:"Zakrvácené karty", i:"https://bradavice.eu/obrazky/pu/kartyz.jpg", d:"Přidá na vámi vlastněné karty strašidelné stříkance krve.", t:"neg"}, 
      {n:"Temnonosný prášek", i:"https://bradavice.eu/obrazky/pu/prasek.jpg", d:"Při příchodu do sekce 'Majetek' a následném odchodu zatmaví EB na černo po dobu 5 minut.", t:"neg"}, 
      {n:"Amulet smůly", i:"https://bradavice.eu/obrazky/pu/amulets.jpg", d:"Zamezuje nalezení balíčků a pravděpodobně i TK.", t:"neg"}, 
      {n:"Náramek neoblíbenosti", i:"https://bradavice.eu/obrazky/pu/naramekn.jpg", d:"Vypisuje pouze červené hlášky (které odebírají galeony).", t:"neg"}, 
      {n:"Náramek oblíbenosti", i:"https://bradavice.eu/obrazky/pu/narameko.jpg", d:"Vypisuje pouze zelené hlášky (které přidávají vzácné galeony).", t:"pos"}, 
      {n:"Ruce Mozkomora", i:"https://bradavice.eu/obrazky/pu/mozkomru.jpg", d:"Mnohonásobně odebírají drahocennou energii při trénování Famfrpálu a brigádách.", t:"neg"}, 
      {n:"Lotroskop", i:"https://bradavice.eu/obrazky/pu/lotroskop.jpg", d:"Zasílá do SP systémovou zprávu o tom, že vám někdo podstrčil nějaké zboží od BB.", t:"pos"}, 
      {n:"Ruka slávy", i:"https://bradavice.eu/obrazky/pu/rukasl.jpg", d:"Mocný předmět, který spolehlivě zamezuje zaktivování Temnonosného prášku.", t:"pos"}, 
      {n:"Sérum proti neviditelnosti", i:"https://bradavice.eu/obrazky/pu/sernev.jpg", d:"Okamžitě a účinně deaktivuje lektvar neviditelnosti.", t:"pos"}, 
      {n:"Seshlá hlava", i:"https://bradavice.eu/obrazky/pu/hlava.jpg", d:"Vypisuje podivné a velmi vtipné hlášky pod vodorovné menu.", t:"pos"}, 
      {n:"Zakletý náhrdelník", i:"https://bradavice.eu/obrazky/pu/nahrdelo.jpg", d:"Zrádný šperk. Přidává nebo ubírá každý den po obnovení systému energii.", t:"neu"}, 
      {n:"Pamatováček", i:"https://bradavice.eu/obrazky/pu/pamatovacek2.jpg", d:"Magická kulička. Naplní se jasně červeným kouřem, kdykoliv na něco zapomeneš.", t:"pos"}, 
      {n:"Seshlá ruka", i:"https://bradavice.eu/obrazky/pu/rukas.jpg", d:"Zobrazuje se v menu. Stihnete-li včas zareagovat, přidá vám energii, pokud ne, energii odebere.", t:"neu"}, 
      {n:"Velký obraceč času", i:"https://bradavice.eu/obrazky/pu/obracec.png", d:"Dokáže výrazně pomoct v portále a celkově ti umožní ovládat a měnit čas.", t:"pos"}
    ]; 

    const hp_qList = [
      {p:"Kapitán", n:"Jméno Kapitána", i:"famfr/kapitan.png"},
      {p:"Střelec", n:"Jméno Střelce 1", i:"famfr/strelec.png"},
      {p:"Střelec", n:"Jméno Střelce 2", i:"famfr/strelec.png"},
      {p:"Střelec", n:"Jméno Střelce 3", i:"famfr/strelec.png"},
      {p:"Odrážeč", n:"Jméno Odrážeče 1", i:"famfr/odrazec.png"},
      {p:"Odrážeč", n:"Jméno Odrážeče 2", i:"famfr/odrazec.png"},
      {p:"Chytač", n:"Jméno Chytače", i:"famfr/chytac.png"},
      {p:"Brankář", n:"Jméno Brankáře", i:"famfr/brankar.png"}
    ];

    let hp_x, hp_dbData = [], hp_studentiData = [];

    function hp_cleanDnesni(txt) { 
      if (!txt || txt === "Nebyl ještě nalezen") return "Nebyl ještě nalezen"; 
      const idx = txt.lastIndexOf(" (od:"); 
      return idx !== -1 ? txt.substring(0, idx) : txt; 
    } 

    const HP_CACHE_KEY = "hp_cache_data_v1";
    const HP_CACHE_TIME_KEY = "hp_cache_time_v1";

    function hp_applyData(d) {
      // --- TOTO JE TO MÍSTO ---
      // Obrázek se už z tabulky neřeší, jen zavoláme časovou automatiku
      updateRoomImage();

      // Akční kontejner (box) prostě skryjeme, protože v tabulce už není
      const box = document.getElementById("hp-action-container");
      if (box) box.className = "hp-hidden";
      // ---

      document.getElementById("hp-live-t").innerText = hp_cleanDnesni(d.dnesni); 

      hp_dbData = d.databaze || []; 
      hp_renderDb(); 

      const noveTK = d.tkText || d.tk || d.pocitadlo || "Načteno";
      const elementTK = document.getElementById("hp-tk-pocitadlo");
      if (elementTK) { elementTK.innerText = noveTK; }

      hp_renderTrezor(d.safiry || []);
      hp_studentiData = d.studenti || [];

      if (d.roomImg) {
        let cestaKObrazku = d.roomImg.startsWith("http") ? d.roomImg : "kolejky_ruzne/" + d.roomImg;
        document.getElementById("hp-main-room-img").src = cestaKObrazku;
      }

      // --- DYNAMICKÉ OVLÁDÁNÍ AKČNÍHO KONTEJNERU ---
      const actionBox = document.getElementById("hp-action-container");
      if (d.akce && d.akce.trim() !== "") {
        actionBox.innerHTML = d.akce; // Vloží text nebo HTML kód přímo z tabulky
        actionBox.className = "hp-action-box"; // Přidá styly a zviditelní kontejner
      } else {
        actionBox.innerHTML = "";
        actionBox.className = "hp-hidden"; // Skryje prvek (nezabírá žádné místo)
      }
    }

    function hp_saveCache(d) {
      try {
        localStorage.setItem(HP_CACHE_KEY, JSON.stringify(d));
        localStorage.setItem(HP_CACHE_TIME_KEY, String(Date.now()));
      } catch (e) {
        console.error("Chyba při ukládání mezipaměti:", e);
      }
    }

    function hp_loadCache() {
      try {
        const cached = localStorage.getItem(HP_CACHE_KEY);
        if (!cached) return false;
        const d = JSON.parse(cached);
        hp_applyData(d);
        return true;
      } catch (e) {
        console.error("Chyba při načítání mezipaměti:", e);
        return false;
      }
    }

    async function hp_fPkg() { 
      try { 
        const r = await fetch(hp_u); 
        const d = await r.json(); 

        hp_applyData(d);
        hp_saveCache(d);

      } catch (e) { 
        console.error("Chyba při stahování dat:", e); 
      } 
    } 

    function hp_renderTrezor(safiryData) {
      const tbody = document.getElementById("hp-trezor-rows");
      if (!tbody) return;
      if (safiryData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: #aebbc8; padding: 10px;">Trezor je prázdný.</td></tr>`;
        return;
      }
      safiryData.sort((a, b) => b.pocet - a.pocet);
      let html = "";
      safiryData.forEach(student => {
        const galeony = student.pocet * 2;
        html += `<tr>
          <td style="text-align: left; font-weight: 500;">${student.jmeno}</td>
          <td style="text-align: center; color: #4a90e2; font-weight: bold;">${student.pocet}</td>
          <td style="text-align: center; color: var(--gold); font-weight: bold;">${galeony}</td>
        </tr>`;
      });
      tbody.innerHTML = html;
    }

    // Nejdřív zkusíme okamžitě zobrazit data z mezipaměti (žádné blikání/"Načítám..." při refreshi),
    // poté se v klidu na pozadí stáhnou a doplní čerstvá data.
    hp_loadCache();
    hp_fPkg();

    function hp_showDoor() {
      hp_bAll();
      document.getElementById("hp-door-view").classList.remove("hp-hidden");
      document.getElementById("hp-klepadlo-hadanka-box").classList.remove("hp-hidden"); 
      document.getElementById("hp-door-img").style.display = "block"; 
      document.getElementById("hp-q").style.display = "none"; 
      document.getElementById("hp-input-box").style.display = "none";
      document.getElementById("hp-trezor-obsah").classList.add("hp-hidden");
    }

    function hp_h() { 
      hp_x = hp_r[Math.floor(Math.random() * hp_r.length)]; 
      document.getElementById("hp-q").innerText = hp_x.q; 
      document.getElementById("hp-door-img").style.display = "none"; 
      document.getElementById("hp-q").style.display = "block"; 
      document.getElementById("hp-input-box").style.display = "block"; 
      document.getElementById("hp-trezor-obsah").classList.add("hp-hidden");
      document.getElementById("hp-a").value = ""; 
      document.getElementById("hp-a").focus(); 
    } 

    function hp_c() { 
      if (document.getElementById("hp-a").value.trim().toLowerCase() === hp_x.a) { 
        document.getElementById("hp-klepadlo-hadanka-box").classList.add("hp-hidden"); 
        document.getElementById("hp-trezor-obsah").classList.remove("hp-hidden");
      } else { 
        alert("To nebyla správná odpověď! *Orel se pobaveně ušklíbne a položí ti novou hádanku.*"); 
        hp_h(); 
      } 
    } 

    function hp_bAll() { 
      document.getElementById("hp-game-view").classList.add("hp-hidden"); 
      document.getElementById("hp-form-view").classList.add("hp-hidden"); 
      document.getElementById("hp-chest-view").classList.add("hp-hidden"); 
      document.getElementById("hp-statue-view").classList.add("hp-hidden"); 
      document.getElementById("hp-quidditch-view").classList.add("hp-hidden"); 
      document.getElementById("hp-gallery-view").classList.add("hp-hidden"); 
      document.getElementById("hp-flag-view").classList.add("hp-hidden"); 
      document.getElementById("hp-door-view").classList.add("hp-hidden"); 
    } 

    function hp_showForm() { 
      hp_bAll(); 
      document.getElementById("hp-form-view").classList.remove("hp-hidden"); 
      document.getElementById("hp-duplicita-info").style.display = "none";
      hp_renderDb(); 
    } 

    function hp_showChest() { 
      hp_bAll(); 
      document.getElementById("hp-chest-view").classList.remove("hp-hidden"); 
      hp_rSpells(); 
      hp_rPotions(); 
      hp_rArtifacts(); 
    } 

    function hp_showStatue() { 
      hp_bAll(); 
      document.getElementById("hp-statue-view").classList.remove("hp-hidden"); 
      hp_switchStatueTab('rowena');
      hp_dailyWisdom();
    } 

    function hp_showFlag() {
      hp_bAll();
      document.getElementById("hp-flag-view").classList.remove("hp-hidden");
    }

    function hp_showQuidditch() {
      hp_bAll();
      document.getElementById("hp-quidditch-view").classList.remove("hp-hidden");
      const div = document.getElementById("hp-q-players-list");
      div.innerHTML = "";
      hp_qList.forEach(p => {
        const i = document.createElement("div");
        i.className = "hp-f-item";
        i.innerHTML = `<img src="${p.i}" width="100px" height="100px"><div><strong style="color:var(--text);">${p.n}</strong><br><span style="font-size:12px; color:#aebbc8;">${p.p}</span></div>`;
        div.appendChild(i);
      });
    }

    function hp_showGallery() {
      hp_bAll();
      document.getElementById("hp-gallery-view").classList.remove("hp-hidden");
      const div = document.getElementById("hp-gallery-list");
      div.innerHTML = "";
      
      if (hp_studentiData.length === 0) {
        div.innerHTML = `<p style="text-align:center; color:#aebbc8; font-size:12px; padding:20px;">Aktuálně zde nejsou žádní zapsaní studenti.</p>`;
        return;
      }

      hp_studentiData.forEach(student => {
        const i = document.createElement("div");
        i.className = "hp-student-profile";
        const fotoUrl = student.portret || "ikony/eagle.png";
        const infoText = student.info || "O tomto studentovi zatím nebyly zadány žádné informace.";
        
        i.innerHTML = `
          <img src="${fotoUrl}" class="hp-student-portrait" onerror="this.src='ikony/eagle.png'">
          <div>
            <h4 class="hp-student-name">${student.jmeno}</h4>
            <p class="hp-student-info">${infoText}</p>
          </div>
        `;
        div.appendChild(i);
      });
    }

    function hp_hideViews() { 
      hp_bAll(); 
      document.getElementById("hp-game-view").classList.remove("hp-hidden"); 
    } 

    function hp_switchTab(t) { 
      document.getElementById("tab-s-btn").classList.remove("active"); 
      document.getElementById("tab-p-btn").classList.remove("active"); 
      document.getElementById("tab-a-btn").classList.remove("active"); 
      document.getElementById("hp-tab-spells").classList.add("hp-hidden"); 
      document.getElementById("hp-tab-potions").classList.add("hp-hidden"); 
      document.getElementById("hp-tab-artifacts").classList.add("hp-hidden"); 
      if (t === 's') { 
        document.getElementById("tab-s-btn").classList.add("active"); 
        document.getElementById("hp-tab-spells").classList.remove("hp-hidden"); 
      } else if (t === 'p') { 
        document.getElementById("tab-p-btn").classList.add("active"); 
        document.getElementById("hp-tab-potions").classList.remove("hp-hidden"); 
      } else if (t === 'a') { 
        document.getElementById("tab-a-btn").classList.add("active"); 
        document.getElementById("hp-tab-artifacts").classList.remove("hp-hidden"); 
      } 
    } 

    /* =========================================
       SOCHA ROWENY — samostatná logika (záložky, výroky, denní moudrost)
       ========================================= */

    const hp_rowenaQuotes = [
      "Moudrost začíná tam, kde končí domněnky.",
      "Ne každá správná odpověď je ta nejrychlejší.",
      "Největší kouzla vznikají ze zvědavosti.",
      "Neboj se zeptat. Jen ten, kdo se ptá, může růst.",
      "Každá přečtená kniha tě změní.",
      "Chyby nejsou porážkou, ale cestou k poznání.",
      "Orel nikdy nelétá bez cíle.",
      "Skutečná síla se skrývá ve vědění.",
      "Nejlepší kouzelníci byli nejdříve nejlepšími studenty.",
      "Rozum je hůlka, kterou nikdo nemůže zlomit.",
      "Přátelství je kouzlo, které nepotřebuje hůlku.",
      "Kdo se přestane učit, přestane růst.",
      "Odvaha není absence strachu, ale rozhodnutí jít dál i přesto.",
      "Knihovna ukrývá víc kouzel než kterákoliv hůlkárna.",
      "Otázky jsou klíčem, odpovědi jen dveřmi.",
      "I ta nejmenší hádanka může otevřít největší dveře.",
      "Logika tě dovede dál než unáhlený čin.",
      "Bradavice tě nenaučí jen kouzlit, ale i přemýšlet.",
      "Havraspár si neváží titulů, ale otevřené mysli.",
      "Pravý učenec se nikdy nepřestane ptát proč.",
      "Moudrý člověk naslouchá víc, než mluví.",
      "Kniha otevřená v pravý čas je cennější než poklad.",
      "Strach z neúspěchu je horší než neúspěch sám.",
      "I sova se musí naučit létat, než dorazí na cíl.",
      "Magie bez rozumu je jen náhoda.",
      "Přítel, který tě podrží v pádu, je vzácnější než galeon.",
      "Hádanky netrénují paměť, ale způsob myšlení.",
      "Nikdy nepodceňuj sílu trpělivosti.",
      "Kdo se bojí zeptat, zůstane navždy v nevědomosti.",
      "Pravda se občas skrývá mezi řádky.",
      "Studium není povinnost, ale dobrodružství mysli.",
      "I noční obloha má svůj řád — stačí se podívat pozorně.",
      "Odvaha bez rozvahy je jen dobrodružství bez konce.",
      "Skutečné vítězství je pochopit, ne jen zvítězit.",
      "Inteligence bez laskavosti je prázdná.",
      "Diadém nezdobí hlavu, ale moudrost, která pod ním přebývá.",
      "Vzduch nese slova daleko, moudrá slova ještě dál.",
      "Každý havran ví, že létat výš znamená vidět víc.",
      "Studuj ne proto, abys věděl víc než ostatní, ale abys rozuměl víc sám sobě.",
      "Logické myšlení je nejtišší, ale nejsilnější kouzlo.",
      "Bystrá mysl otevře dveře, které hůlka nikdy neotevře.",
      "Bradavice jsou domovem těch, kteří se nebojí snít.",
      "Přátelství přetrvá i tam, kde kouzla selžou.",
      "Cesta k moudrosti vede přes mnoho špatných odpovědí.",
      "Kdo čte, žije tisíckrát.",
      "I orel se musí nejdřív naučit chodit po zemi.",
      "Nejtěžší hádanky řeší klidná mysl, ne rychlá ruka.",
      "Věda a magie jsou jen dvě strany téže mince.",
      "Nikdy nepřestávej být zvědavý — zvědavost je počátek objevu.",
      "Moudrost se nedědí, moudrost se získává.",
      "Ten, kdo umí naslouchat tichu, slyší nejvíc.",
      "Učenec, který se nebojí přiznat chybu, je už na půl cesty k moudrosti.",
      "Kniha, kterou jsi nepřečetl, na tebe stále čeká.",
      "Skutečný poklad Havraspáru není zlato, ale vědění.",
      "I hvězdy potřebují tmu, aby zazářily.",
      "Odvaha pomoci příteli je stejně cenná jako odvaha bojovat.",
      "Rozum bez srdce je studený jako kámen.",
      "Nejlepší kouzlo je to, které pomůže někomu jinému.",
      "Trpělivost je klíč, který otevírá i nejzapeklitější zámky.",
      "Logika je most mezi otázkou a odpovědí.",
      "Pravý student se učí i tehdy, když selže.",
      "Co je psáno, to je dáno — ale co je myšleno, to je věčné.",
      "Havran si pamatuje cestu domů, i když je tma.",
      "Bystrost mysli je dar, který nikdo nemůže ukrást.",
      "Kdo hledá pravdu, najde i sám sebe.",
      "Moudrost roste tam, kde je prostor pro pochybnosti.",
      "Přátelé jsou knihovna, do které se vždy vrátíš.",
      "I malá hádanka může naučit velkou pravdu.",
      "Učení se nikdy nekončí, mění jen svou podobu.",
      "Kdo se nebojí ptát, nikdy nezůstane sám v temnotě.",
      "Síla mysli překoná i tu nejtemnější magii.",
      "Bradavice věří, že každý student má svou jedinečnou jiskru.",
      "Originalita je odvaha myslet jinak než ostatní.",
      "Kreativita je kouzlo, které nepotřebuje hůlku, jen odvahu.",
      "I ten nejmoudřejší kouzelník byl jednou nováčkem.",
      "Pravé vítězství přichází z porozumění, ne z porážky druhého.",
      "Moudrost je tichá, ale slyší ji každý, kdo naslouchá.",
      "Učit se znamená nikdy nepřestat klást otázky.",
      "Knihy jsou mosty mezi minulostí a budoucností.",
      "Kdo věří jen kouzlům, zapomíná na sílu vlastní mysli.",
      "Statečnost spočívá i v přiznání, že nevíš.",
      "I sova nosí poselství tam, kam noha nedojde.",
      "Hádanka je jen otázka oblečená do tajemství.",
      "Skutečná moc je v umění naslouchat druhým.",
      "Moudrý vůdce naslouchá nejdřív, mluví až pak.",
      "Magie je jen nástroj, rozum je ten, kdo ji řídí.",
      "Přátelství v Havraspáru se měří hloubkou rozhovorů, ne počtem slov.",
      "Vědění, které nesdílíš, je jako svíčka, která nikdy nezasvítí.",
      "Buď tím, kdo se ptá, ne tím, kdo jen souhlasí.",
      "Každá zkouška je jen další kapitola tvého příběhu.",
      "Klid mysli je silnější zbraní než unáhlené kouzlo.",
      "Vzdělání je jediný poklad, který ti nikdo nemůže vzít.",
      "Kdo se učí z chyb druhých, ušetří si vlastní bolest.",
      "Otevřená mysl je branou ke všem kouzlům světa.",
      "I ten nejtišší student může mít nejhlasitější myšlenky.",
      "Věrnost svým hodnotám je magie, která nikdy nevybledne.",
      "Moudrost znamená vědět, kdy mlčet a kdy promluvit.",
      "Touha po poznání je plamen, který nikdy nesmí zhasnout.",
      "Kdo se nebojí selhat, má největší šanci uspět.",
      "I hvězdná obloha byla jednou jen temnotou, než někdo zapálil první hvězdu.",
      "Pravý havran létá vysoko, ale nikdy nezapomíná, odkud vzlétl."
    ];

    function hp_switchStatueTab(t) {
      document.getElementById("tab-rowena-btn").classList.remove("active");
      document.getElementById("tab-funk-btn").classList.remove("active");
      document.getElementById("tab-ohp-btn").classList.remove("active");
      document.getElementById("hp-tab-rowena").classList.add("hp-hidden");
      document.getElementById("hp-tab-funk").classList.add("hp-hidden");
      document.getElementById("hp-tab-ohp").classList.add("hp-hidden");

      if (t === 'rowena') {
        document.getElementById("tab-rowena-btn").classList.add("active");
        document.getElementById("hp-tab-rowena").classList.remove("hp-hidden");
      } else if (t === 'funk') {
        document.getElementById("tab-funk-btn").classList.add("active");
        document.getElementById("hp-tab-funk").classList.remove("hp-hidden");
      } else if (t === 'ohp') {
        document.getElementById("tab-ohp-btn").classList.add("active");
        document.getElementById("hp-tab-ohp").classList.remove("hp-hidden");
      }
    }

    function hp_dailyWisdom() {
      const el = document.getElementById("hp-rowena-daily-text");
      if (!el) return;

      const today = new Date();
      const dayKey = today.getFullYear() * 372 + (today.getMonth() + 1) * 31 + today.getDate();
      const idx = dayKey % hp_rowenaQuotes.length;
      el.innerText = hp_rowenaQuotes[idx];
    }

    hp_dailyWisdom();

    function hp_cp(txt) { 
      navigator.clipboard.writeText(txt).then(() => { 
        const t = document.getElementById("hp-copy-toast"); 
        t.innerText = `Kouzlo "${txt}" zkopírováno!`; 
        t.style.display = "block"; 
        setTimeout(() => { t.style.display = "none"; }, 2000); 
      }).catch(e => console.error(e)); 
    } 

    function hp_rSpells() { 
      const div = document.getElementById("hp-tab-spells"); 
      div.innerHTML = ""; 
      hp_sList.forEach(s => { 
        const i = document.createElement("div"); 
        i.className = "hp-grid-item"; 
        i.innerHTML = `<img src="${s.i}" style="width: 90px; height: 90px;"><strong>${s.n}</strong><span class="hp-spell-name">${s.s}</span>`; 
        i.onclick = () => hp_cp(s.s); 
        div.appendChild(i); 
      }); 
    } 

    function hp_rPotions() { 
      const div = document.getElementById("hp-tab-potions"); 
      div.innerHTML = ""; 
      const posTitle = document.createElement("div"); 
      posTitle.className = "hp-potion-section-title"; 
      posTitle.innerText = "Pozitivní účinky"; 
      div.appendChild(posTitle); 
      hp_pList.filter(p => p.t === "pos").forEach(p => { div.appendChild(hp_crPItem(p)); }); 
      const negTitle = document.createElement("div"); 
      negTitle.className = "hp-potion-section-title"; 
      negTitle.innerText = "Negativní účinky"; 
      div.appendChild(negTitle); 
      hp_pList.filter(p => p.t === "neg").forEach(p => { div.appendChild(hp_crPItem(p)); }); 
    } 

    function hp_crPItem(p) { 
      const i = document.createElement("div"); 
      i.className = "hp-potion-item"; 
      const srcIkony = (p.t === "pos") ? "ikony/lektvar_poz.png" : "ikony/lektvar_neg.png";
      i.innerHTML = `<img src="${srcIkony}" class="hp-potion-img"><div><strong style="color:var(--text);">${p.n}</strong><br><span style="font-size:11px; color:#aebbc8;">${p.d}</span></div>`; 
      i.onclick = () => window.open(p.r, "_blank"); 
      return i; 
    } 

    function hp_rArtifacts() { 
      const div = document.getElementById("hp-tab-artifacts"); 
      div.innerHTML = ""; 
      hp_aList.forEach(a => { 
        let tintClass = "hp-tint-neu"; 
        if(a.t === "neg") tintClass = "hp-tint-neg"; 
        if(a.t === "pos") tintClass = "hp-tint-pos"; 
        const i = document.createElement("div"); 
        i.className = "hp-potion-item"; 
        i.innerHTML = `<img src="${a.i}" class="hp-artifact-img ${tintClass}" onerror="this.src='ikony/lektvar_poz.png'"><div><strong style="color:var(--text);">${a.n}</strong><br><span style="font-size:11px; color:#aebbc8;">${a.d}</span></div>`; 
        i.onclick = () => window.open(a.i, "_blank"); 
        div.appendChild(i); 
      }); 
    } 

    function hp_renderDb() { 
      const tbody = document.getElementById("hp-db-rows"); 
      if (!tbody) return; 
      tbody.innerHTML = ""; 
      
      hp_dbData.forEach(b => { 
        const r = document.createElement("tr"); 
        r.innerHTML = `<td><img src="${b.url}" onerror="this.src='https://img.icons8.com/fluency/48/box.png'" onclick="hp_setAsDnesni('${b.url.replace(/'/g, "\\'")}', '${b.obsah.replace(/'/g, "\\'")}', '${b.jmeno.replace(/'/g, "\\'")}')" title="Nastavit jako dnešní balíček"></td><td><code>${b.id}</code></td><td>${b.obsah}</td><td>${b.jmeno}</td>`; 
        tbody.appendChild(r); 
      }); 
    } 

    async function hp_setAsDnesni(url, obsah, jmeno) {
      if(!confirm(`Chceš nastavit balíček „${obsah}“ jako dnešní balíček pro celou kolej?`)) return;
      document.getElementById("hp-live-t").innerText = "Ukládám změnu...";

      try {
        await fetch(hp_u, { 
          method: "POST", 
          mode: "no-cors", 
          headers: { "Content-Type": "application/json" }, 
          body: JSON.stringify({ url: url, obsah: obsah, jmeno: jmeno }) 
        }); 
        
        document.getElementById("hp-live-t").innerText = obsah; 
        alert("Dnešní balíček byl úspěšně změněn.");
        hp_hideViews(); 
      } catch (e) {
        alert("Nepodařilo se změnit dnešní balíček. Zkus to prosím znovu.");
        document.getElementById("hp-live-t").innerText = "Chyba";
      }
    }

    function hp_checkAutocompleteAndDuplicate() {
      let inputVal = document.getElementById("hp-f-url").value.trim();
      const infoDiv = document.getElementById("hp-duplicita-info");
      
      if (!inputVal) {
        infoDiv.style.display = "none";
        return;
      }

      if (!inputVal.startsWith("http") && !inputVal.includes("/")) {
        const shodaPodleId = hp_dbData.find(b => b.id.toLowerCase() === inputVal.toLowerCase());
        if (shodaPodleId) {
          document.getElementById("hp-f-url").value = shodaPodleId.url;
          inputVal = shodaPodleId.url;
        }
      }

      const nalezenyBalicek = hp_dbData.find(b => 
        b.url.toLowerCase() === inputVal.toLowerCase() || 
        b.id.toLowerCase() === inputVal.toLowerCase()
      );

      if (nalezenyBalicek) {
        infoDiv.style.display = "block";
        infoDiv.innerHTML = ` <strong>Tento balíček už byl nalezen!</strong><br>` +
                             `<strong>Vložil/a:</strong> ${nalezenyBalicek.jmeno}<br>` +
                             `<strong>Obsah:</strong> ${nalezenyBalicek.obsah}`;
        document.getElementById("hp-f-obsah").value = nalezenyBalicek.obsah;
      } else {
        infoDiv.style.display = "none";
      }
    }

    async function hp_sendForm() { 
      let u = document.getElementById("hp-f-url").value.trim(), 
          o = document.getElementById("hp-f-obsah").value.trim(), 
          j = document.getElementById("hp-f-jmeno").value.trim(); 
      if (!u || !o || !j) { alert("Prosím vyplň URL balíčku, jeho obsah i své jméno."); return; } 

      if (!u.startsWith("http")) {
        u = "https://bradavice.eu/obrazky/balicky/" + u + ".png";
      }

      try { 
        await fetch(hp_u, { 
          method: "POST", 
          mode: "no-cors", 
          headers: { "Content-Type": "application/json" }, 
          body: JSON.stringify({ url: u, obsah: o, jmeno: j }) 
        }); 
        document.getElementById("hp-live-t").innerText = o; 
        let id = "Neznámé ID"; 
        if (u.indexOf("balicky/") !== -1) { id = u.substring(u.indexOf("balicky/") + 8).replace(".png",""); } 
        
        const jeDuplicitni = hp_dbData.some(b => b.url === u); 
        if (jeDuplicitni) { 
          alert("Tento balíček už byl v minulosti nalezen. Informace se přesto uložila do databáze."); 
        } else { 
          alert("Balíček byl přidán do seznamu nalezených balíčků. Děkujeme za pomoc Havraspáru!"); 
          hp_dbData.push({ url: u, id: id, obsah: o, jmeno: j }); 
          hp_renderDb(); 
        } 
        document.getElementById("hp-f-url").value = ""; 
        document.getElementById("hp-f-obsah").value = ""; 
        document.getElementById("hp-f-jmeno").value = ""; 
        document.getElementById("hp-duplicita-info").style.display = "none";
        hp_hideViews(); 
      } catch (e) { 
        alert("Balíček se nepodařilo odeslat. Zkus to prosím za chvíli znovu."); 
      } 
    }
  // Automatická funkce pro čas
function updateRoomImage() {
    const img = document.getElementById("hp-main-room-img");
    if (!img) return;
    const hour = new Date().getHours();
    let image = "kolejky_ruzne/kolejka.png";

    if (hour >= 5 && hour < 7) image = "kolejky_ruzne/kolejka_vychodslunce.png";
    else if (hour >= 17 && hour < 18) image = "kolejky_ruzne/kolejka_svitani.png";
    else if (hour >= 18 && hour < 19) image = "kolejky_ruzne/kolejka_zapadslunce.png";
    else if (hour >= 19 || hour < 5) image = "kolejky_ruzne/kolejka_noc.png";
    
    // Změníme zdroj jen pokud je jiný (prevence problikávání)
    if (img.getAttribute('src') !== image) {
        img.src = image;
    }
}

// Spustit ihned po načtení
updateRoomImage();
hp_fPkg();

// Pravidelná aktualizace každých 5 minut (300 000 ms)
setInterval(() => {
    updateRoomImage();
    hp_fPkg();
}, 300000);
