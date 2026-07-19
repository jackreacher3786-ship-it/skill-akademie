// Skill-Akademie – Lektionsdaten
// Neue Lektionen werden am ENDE des Arrays ergänzt (vor der schließenden Klammer).
// Format siehe vorhandene Einträge. Datum: JJJJ-MM-TT.
window.LEKTIONEN = [
{
  id: "schedule",
  datum: "2026-07-01",
  titel: "Geplante Aufgaben (schedule)",
  kategorie: "Automatisierung",
  kurz: "Claude Aufgaben automatisch zu festen Zeiten oder wiederkehrend ausführen lassen.",
  wasErKann: "Mit diesem Skill führt Claude Aufgaben selbstständig zu einem bestimmten Zeitpunkt oder in festem Rhythmus aus – täglich, wöchentlich, stündlich oder einmalig in der Zukunft („in einer Stunde“, „morgen um 15 Uhr“). Technisch steckt ein Cron-Zeitplan dahinter, du formulierst aber einfach in normaler Sprache.",
  grenzen: [
    "Die Aufgabe läuft nur, wenn der Dienst zum geplanten Zeitpunkt erreichbar ist – verpasste Läufe werden beim nächsten Start nachgeholt.",
    "Kein Weckdienst per SMS: Ergebnisse landen im Chat (oder dort, wohin die Aufgabe sie ablegt).",
    "Bestehende Aufgaben lassen sich jederzeit ändern oder auflisten."
  ],
  beispiele: [
    "Gib mir jeden Morgen um 7 Uhr eine Zusammenfassung der wichtigsten Tech-News.",
    "Fasse jeden Freitagnachmittag meine ungelesenen wichtigen E-Mails zusammen.",
    "Erinnere mich in zwei Stunden daran, die Rechnung zu verschicken.",
    "Welche geplanten Aufgaben habe ich gerade?"
  ],
  anwendung: "Auslöser ist jede Zeitangabe im Auftrag: „jeden Tag“, „jeden Montag“, „um 8 Uhr“, „in einer Stunde“. Ändern geht per Zuruf: „Verschieb das Briefing auf 9 Uhr.“",
  uebung: {
    auftrag: "Richte eine einmalige Testaufgabe ein und lösche sie danach wieder. So lernst du Anlegen, Auflisten und Entfernen in einem Durchgang.",
    prompt: "Erinnere mich in 30 Minuten daran, ein Glas Wasser zu trinken. Liste mir danach alle meine geplanten Aufgaben auf."
  },
  quiz: [
    { frage: "Was passiert, wenn die App zum geplanten Zeitpunkt geschlossen ist?", optionen: ["Die Aufgabe entfällt ersatzlos", "Die Aufgabe wird beim nächsten Start nachgeholt", "Claude ruft dich an"], richtig: 1, erklaerung: "Verpasste Läufe werden nachgeholt, sobald der Dienst wieder erreichbar ist." },
    { frage: "Wie richtest du eine wiederkehrende Aufgabe ein?", optionen: ["Mit Cron-Syntax wie '0 7 * * *'", "In normaler Sprache mit Zeitangabe", "Nur über die Einstellungen"], richtig: 1, erklaerung: "Du formulierst einfach z. B. „jeden Morgen um 7 Uhr“ – die Cron-Übersetzung übernimmt Claude." },
    { frage: "Wo landen die Ergebnisse eines geplanten Laufs?", optionen: ["Per SMS auf dem Handy", "Im Chat bzw. am definierten Ablageort", "Nirgends, sie müssen abgeholt werden"], richtig: 1, erklaerung: "Es ist kein Benachrichtigungsdienst – die Ergebnisse erscheinen im Chat oder werden z. B. in Drive abgelegt." }
  ],
  cheatsheet: {
    ausloeser: "Jede Zeitangabe: „jeden Tag“, „jeden Montag um 8“, „in einer Stunde“",
    voraussetzungen: "Keine – funktioniert ohne Verbindungen",
    beispielPrompt: "Fasse mir jeden Freitag um 16 Uhr die Woche zusammen: wichtige Mails, anstehende Termine der Folgewoche."
  }
},
{
  id: "deep-research",
  datum: "2026-07-01",
  titel: "Tiefenrecherche (deep-research)",
  kategorie: "Recherche",
  kurz: "Systematische Mehrquellen-Recherche mit Prüfschritt und belegtem Bericht.",
  wasErKann: "Statt einmal zu suchen, zerlegt Claude deine Frage in Teilaspekte, führt viele parallele Web-Suchen durch, liest die Quellen, prüft Aussagen gegeneinander und liefert einen strukturierten Bericht mit Quellenangaben. Das dauert länger als eine normale Antwort – dafür ist das Ergebnis belastbarer.",
  grenzen: [
    "Braucht funktionierenden Web-Zugriff.",
    "Keine Garantie für Fehlerfreiheit – Quellen können falsch sein, sind aber transparent nachprüfbar.",
    "Bei sehr frischen Ereignissen (wenige Stunden alt) ist die Quellenlage oft noch dünn.",
    "Für schnelle Faktenfragen überdimensioniert."
  ],
  beispiele: [
    "Mach eine Tiefenrecherche: Welche Wärmepumpe lohnt sich 2026 für ein Einfamilienhaus Baujahr 1990 – mit Förderlage und Betriebskosten?",
    "Recherchiere gründlich den Forschungsstand zu Kreatin bei Ausdauersport, mit Quellen.",
    "Vergleiche die drei größten Anbieter für X hinsichtlich Preis, Datenschutz und Vertragsbindung – belegter Bericht.",
    "Fundierter Überblick über die rechtliche Lage zu privaten Drohnenflügen in Österreich."
  ],
  anwendung: "Auslöser: „Tiefenrecherche“, „recherchiere gründlich“, „Bericht mit Quellen“. Je präziser die Frage (Budget, Einsatzzweck, Region gleich mitliefern), desto besser das Ergebnis.",
  uebung: {
    auftrag: "Starte eine Tiefenrecherche zu einem Thema, das dich gerade real beschäftigt. Achte darauf, wie Claude nachfragt bzw. wie der Bericht Quellen ausweist.",
    prompt: "Mach eine Tiefenrecherche: Was sind die aktuell besten Möglichkeiten, ein kleines Unternehmen in Deutschland gegen Cyberrisiken zu versichern? Vergleiche Anbieter, typische Kosten und Ausschlüsse, mit Quellen."
  },
  quiz: [
    { frage: "Worin unterscheidet sich die Tiefenrecherche von einer normalen Frage?", optionen: ["Sie nutzt eine bessere Suchmaschine", "Sie arbeitet breiter, mit Prüfschritt und Quellenbericht", "Sie ist schneller"], richtig: 1, erklaerung: "Kern ist das systematische Vorgehen: Teilfragen, viele Quellen, Gegencheck, belegter Bericht." },
    { frage: "Wofür ist der Skill NICHT gedacht?", optionen: ["Kaufentscheidungen", "Marktvergleiche", "Schnelle Faktenfragen wie 'Wie hoch ist der Eiffelturm?'"], richtig: 2, erklaerung: "Einfache Fakten beantwortet der normale Chat schneller und genauso gut." },
    { frage: "Deine Frage ist noch vage ('Welches Auto soll ich kaufen?'). Was passiert?", optionen: ["Claude rät einfach", "Claude fragt nach Budget, Einsatzzweck, Region", "Die Recherche wird abgebrochen"], richtig: 1, erklaerung: "Gezielte Rückfragen sind beabsichtigt und verbessern das Ergebnis spürbar." }
  ],
  cheatsheet: {
    ausloeser: "„Mach eine Tiefenrecherche“, „recherchiere gründlich“, „Bericht mit Quellen“",
    voraussetzungen: "Web-Zugriff; präzise Fragestellung mit Kontext",
    beispielPrompt: "Mach eine Tiefenrecherche zu [Thema]. Kontext: [Budget/Region/Zweck]. Ergebnis als strukturierter Bericht mit Quellen."
  }
},
{
  id: "docx",
  datum: "2026-07-02",
  titel: "Word-Dokumente (docx)",
  kategorie: "Office",
  kurz: "Echte Word-Dateien erstellen, lesen und bearbeiten – inkl. Formatierung und Änderungsverfolgung.",
  wasErKann: "Erstellt, liest und bearbeitet .docx-Dateien: Berichte, Briefe, Memos, Verträge, Vorlagen – mit Überschriften, Inhaltsverzeichnis, Tabellen, Kopf-/Fußzeilen und Seitenzahlen. Bestehende Dokumente kann Claude ändern: Suchen/Ersetzen, Umstrukturieren, Bilder tauschen, Tracked Changes und Kommentare.",
  grenzen: [
    "Nur für .docx – für PDF, Excel, PowerPoint gibt es eigene Skills.",
    "Zu bearbeitende Dateien müssen hochgeladen oder in einem verbundenen Ordner liegen; Google-Docs-Dateien sind kein .docx.",
    "Sehr aufwendige Layouts stoßen an Grenzen; für Geschäftsdokumente reicht es in der Regel.",
    "Endkontrolle in Word bleibt sinnvoll, besonders bei rechtlich relevanten Texten."
  ],
  beispiele: [
    "Erstelle einen Projektbericht als Word-Dokument mit Inhaltsverzeichnis und Seitenzahlen – Thema: Quartalsergebnisse Q2.",
    "Ersetze in diesem Vertragsentwurf überall 'Muster GmbH' durch 'Reacher Consulting' und passe das Datum an.",
    "Lies das angehängte Word-Dokument und fasse die Kernpunkte zusammen.",
    "Baue eine wiederverwendbare Briefvorlage mit Briefkopf."
  ],
  anwendung: "Löst automatisch aus bei „Word-Dokument“, „.docx“, „Bericht als Word-Datei“, „Memo“, „Briefvorlage“. Ergebnis kommt als fertige .docx zum Öffnen.",
  uebung: {
    auftrag: "Lass dir ein kleines, aber vollständig formatiertes Word-Dokument bauen und öffne es anschließend in Word, um das Ergebnis zu prüfen.",
    prompt: "Erstelle mir ein einseitiges Word-Dokument: eine Checkliste für die Vorbereitung eines Kundentermins, mit Titel, kurzer Einleitung und einer Tabelle (Punkt / erledigt / Notiz)."
  },
  quiz: [
    { frage: "Du willst eine Google-Docs-Datei aus Drive bearbeiten lassen. Geht das direkt?", optionen: ["Ja, problemlos", "Nein – sie müsste erst als .docx vorliegen", "Nur mit Premium"], richtig: 1, erklaerung: "Google Docs ist ein eigenes Format; der Skill arbeitet mit echten .docx-Dateien." },
    { frage: "Welche Funktion beherrscht der Skill bei bestehenden Dokumenten?", optionen: ["Suchen/Ersetzen und Tracked Changes", "Makros programmieren", "Dateien verschlüsseln"], richtig: 0, erklaerung: "Ersetzen, Umstrukturieren, Kommentare und Änderungsverfolgung gehören zum Kern." },
    { frage: "Was ist der sinnvollste letzte Schritt bei einem Vertragsdokument?", optionen: ["Direkt versenden", "Endkontrolle in Word", "Als PDF drucken"], richtig: 1, erklaerung: "Gerade bei rechtlich relevanten Texten gehört die eigene Endkontrolle dazu." }
  ],
  cheatsheet: {
    ausloeser: "„Word-Dokument“, „.docx“, „Memo“, „Bericht als Word-Datei“",
    voraussetzungen: "Für Bearbeitung: Datei hochladen oder Ordner verbinden",
    beispielPrompt: "Erstelle einen zweiseitigen Bericht als Word-Dokument zu [Thema], mit Inhaltsverzeichnis, Überschriften und Seitenzahlen."
  }
},
{
  id: "call-prep",
  datum: "2026-07-02",
  titel: "Gesprächsvorbereitung (sales:call-prep)",
  kategorie: "Sales",
  kurz: "Strukturiertes Briefing vor Kundengesprächen: Firmenprofil, Teilnehmer, Agenda, Einwände.",
  wasErKann: "Bereitet dich in Minuten auf ein Kundengespräch vor: Firmenprofil, Kurzporträts der Teilnehmer, bisherige Historie, aktuelle News, Agenda-Vorschlag, passende Fragen und wahrscheinliche Einwände mit Antwortideen. Das Briefing passt sich dem Gesprächstyp an (Erstgespräch, Demo, Verhandlung, Check-in).",
  grenzen: [
    "Funktioniert ohne verbundene Tools (per Websuche), wird aber deutlich stärker mit Kalender, Gmail und CRM.",
    "Ohne Historie bleibt das Briefing auf öffentlich Recherchierbares beschränkt – Interna werden nicht erfunden.",
    "CRM- und Transkript-Anbindungen (z. B. HubSpot, Fireflies) müssen autorisiert sein, um genutzt zu werden."
  ],
  beispiele: [
    "Bereite mich auf mein Gespräch mit der Müller GmbH morgen vor.",
    "Donnerstag Preisverhandlung mit dem Einkaufsleiter von Firma X – mach mir ein Briefing.",
    "Call prep Acme Corp – Discovery Call, Teilnehmer: Anna Schmidt (CTO), Ben Weber (Head of IT).",
    "Hier meine Notizen vom letzten Gespräch – bereite mich auf das Folgegespräch vor."
  ],
  anwendung: "Auslöser: „Bereite mich auf das Meeting mit … vor“ oder Nennung eines Kundentermins mit Bitte um Vorbereitung. Mindestangaben: Firma und Gesprächstyp; hilfreich: Teilnehmer, dein Ziel, bekannte Bedenken.",
  uebung: {
    auftrag: "Nimm einen echten anstehenden Termin (oder denk dir einen realistischen aus) und lass dir ein Briefing erstellen. Prüfe, welche Teile ohne CRM-Anbindung gefüllt werden können.",
    prompt: "Bereite mich auf ein Erstgespräch mit [Firmenname] nächste Woche vor. Mein Ziel: herausfinden, ob unser Angebot passt. Teilnehmer: [Name, Rolle]. Erstelle Briefing mit Firmenprofil, Fragenkatalog und möglichen Einwänden."
  },
  quiz: [
    { frage: "Was sind die Mindestangaben für ein brauchbares Briefing?", optionen: ["Nur der Firmenname", "Firmenname und Gesprächstyp", "Vollständige CRM-Historie"], richtig: 1, erklaerung: "Firma plus Gesprächstyp (Erstgespräch, Demo, Verhandlung, Check-in) reichen zum Start." },
    { frage: "Was macht der Skill, wenn kein CRM verbunden ist?", optionen: ["Er verweigert die Arbeit", "Er erfindet plausible Interna", "Er nutzt Websuche und deine Angaben"], richtig: 2, erklaerung: "Ohne Anbindungen arbeitet er mit öffentlichen Quellen und dem, was du mitgibst – Interna werden nie erfunden." },
    { frage: "Welcher Skill passt für die NACHbereitung eines Gesprächs?", optionen: ["sales:call-summary", "sales:forecast", "legal:brief"], richtig: 0, erklaerung: "call-summary extrahiert Aktionspunkte, entwirft die Follow-up-Mail und die CRM-Notiz." }
  ],
  cheatsheet: {
    ausloeser: "„Prep me for my call with …“ / „Bereite mich auf das Meeting mit … vor“",
    voraussetzungen: "Keine Pflicht-Verbindungen; stärker mit Kalender, Gmail, CRM",
    beispielPrompt: "Bereite mich auf [Gesprächstyp] mit [Firma] vor. Ziel: [Ziel]. Teilnehmer: [Namen/Rollen]."
  }
},
{
  id: "triage-nda",
  datum: "2026-07-04",
  titel: "NDA-Triage (legal:triage-nda)",
  kategorie: "Legal",
  kurz: "Eingehende Geheimhaltungsvereinbarungen nach Ampelsystem einstufen: grün, gelb, rot.",
  wasErKann: "Prüft ein eingehendes NDA und stuft es ein: GRÜN (Standard, kann nach üblichen Regeln unterschrieben werden), GELB (Abweichungen, die ein Jurist ansehen sollte), ROT (kritische Klauseln, volle rechtliche Prüfung nötig). Geachtet wird auf versteckte Abwerbeverbote, Wettbewerbsverbote, fehlende Vertraulichkeits-Ausnahmen, überlange Laufzeiten und einseitige Pflichten – jeweils mit Fundstelle und Begründung.",
  grenzen: [
    "Ersetzt keine Rechtsberatung – es ist eine Vorsortierung für die Entscheidung: selbst freigeben oder zum Anwalt.",
    "Keine Pflicht-Verbindungen: Datei (PDF/DOCX) hochladen oder Text einfügen genügt.",
    "Abruf aus DocuSign o. Ä. nur mit eingerichteter Verbindung."
  ],
  beispiele: [
    "Hier ist ein NDA von einem neuen Lieferanten – triagiere es: Kann ich einfach unterschreiben?",
    "Prüf dieses NDA auf versteckte Non-Solicits oder Wettbewerbsverbote.",
    "Ein Interessent hat uns sein Standard-NDA geschickt. Stufe es ein: grün, gelb oder rot?",
    "Fehlen in diesem NDA die üblichen Ausnahmen von der Geheimhaltungspflicht?"
  ],
  anwendung: "Auslöser: jede Formulierung rund um ein eingehendes NDA – „NDA prüfen“, „kann ich das unterschreiben?“. Dokument als Upload oder eingefügten Text mitgeben.",
  uebung: {
    auftrag: "Suche dir ein beliebiges NDA (z. B. ein altes aus deinen Unterlagen oder ein öffentliches Muster) und lass es triagieren. Achte auf die Fundstellen in der Begründung.",
    prompt: "Triagiere das folgende NDA nach dem Ampelsystem (grün/gelb/rot). Nenne jede Abweichung mit Fundstelle und gib eine klare Empfehlung: selbst freigeben, nachverhandeln oder Anwaltsprüfung. [NDA-Text hier einfügen oder Datei anhängen]"
  },
  quiz: [
    { frage: "Was bedeutet die Einstufung GELB?", optionen: ["Sofort unterschreiben", "Abweichungen, die ein Jurist ansehen sollte", "Vertrag vernichten"], richtig: 1, erklaerung: "Gelb heißt: kein Standardfall, aber auch nicht kritisch – juristischer Blick empfohlen." },
    { frage: "Auf welche versteckte Klausel achtet der Skill besonders?", optionen: ["Farbe des Logos", "Abwerbeverbote (Non-Solicits)", "Rechtschreibfehler"], richtig: 1, erklaerung: "Non-Solicits und Non-Competes verstecken sich oft in NDAs und gehen über reine Geheimhaltung hinaus." },
    { frage: "Was ersetzt die Triage NICHT?", optionen: ["Das Lesen des Vertrags durch Claude", "Eine Rechtsberatung", "Das Ampelsystem"], richtig: 1, erklaerung: "Die Triage ist eine Vorsortierung – die verbindliche rechtliche Bewertung bleibt beim Anwalt." }
  ],
  cheatsheet: {
    ausloeser: "„NDA prüfen/einstufen“, „kann ich das unterschreiben?“",
    voraussetzungen: "Nur das Dokument (Upload oder Text) – keine Verbindungen nötig",
    beispielPrompt: "Triagiere dieses NDA (grün/gelb/rot), nenne Abweichungen mit Fundstelle und gib eine Empfehlung. [Datei/Text]"
  }
},
{
  id: "business-pulse",
  datum: "2026-07-05",
  titel: "Geschäfts-Snapshot (business-pulse)",
  kategorie: "Small Business",
  kurz: "Einseitiger Gesamtüberblick: Kasse, Umsatz, Pipeline, Woche, Watch-List – auf Zuruf.",
  wasErKann: "Erstellt einen kompakten Überblick über dein Geschäft in sechs Blöcken: Kassenstand (QuickBooks), Umsatztrend (PayPal/Square), Pipeline (HubSpot), Termine der Woche (Kalender), dringende Punkte aus Mail/Chat (Gmail/Slack) und als Fazit den einen Punkt, der heute Aufmerksamkeit braucht. Er arbeitet mit dem, was verbunden ist, und benennt offen, welche Bereiche fehlen.",
  grenzen: [
    "Ohne Verbindungen liefert der Skill wenig – mindestens ein Connector sollte aktiv sein.",
    "Er erfindet keine Zahlen für nicht verbundene Systeme.",
    "Für das volle Bild müssen QuickBooks, PayPal/Square/Stripe und HubSpot autorisiert sein."
  ],
  beispiele: [
    "Wie läuft das Geschäft gerade? Gib mir einen Snapshot.",
    "Catch me up – was habe ich diese Woche verpasst?",
    "Erstell mir eine Wochenzusammenfassung fürs Geschäft, Stand heute.",
    "Was ist heute das Wichtigste, um das ich mich kümmern sollte?"
  ],
  anwendung: "Springt automatisch an bei Fragen zum Geschäftszustand: „Snapshot“, „Wochenzusammenfassung“, „was übersehe ich gerade“. Gut kombinierbar mit schedule: „Schick mir jeden Montag um 8 Uhr einen Business-Pulse.“",
  uebung: {
    auftrag: "Fordere einen Snapshot an und beobachte, welche Blöcke mit deinen aktuellen Verbindungen gefüllt werden – und welche als fehlend ausgewiesen sind.",
    prompt: "Gib mir einen Business-Pulse: Wie läuft das Geschäft gerade, was steht diese Woche an, und was ist der eine Punkt, um den ich mich heute kümmern sollte?"
  },
  quiz: [
    { frage: "Was macht der Skill mit Bereichen, für die kein Tool verbunden ist?", optionen: ["Er schätzt plausible Zahlen", "Er benennt sie offen als fehlend", "Er bricht komplett ab"], richtig: 1, erklaerung: "Teil-Überblick statt erfundener Daten – fehlende Quellen werden transparent genannt." },
    { frage: "Welche Kombination ergibt einen automatischen Wochenbericht?", optionen: ["business-pulse + schedule", "business-pulse + docx", "business-pulse + triage-nda"], richtig: 0, erklaerung: "„Schick mir jeden Montag um 8 Uhr einen Business-Pulse“ verbindet beide Skills." },
    { frage: "Welcher Spezial-Skill liefert den reinen Wochenabschluss mit Umsatzvergleich?", optionen: ["friday-brief", "monday-brief", "cash-flow-snapshot"], richtig: 0, erklaerung: "friday-brief ist die End-of-Week-Variante; monday-brief startet die Woche, cash-flow-snapshot ist reine Liquidität." }
  ],
  cheatsheet: {
    ausloeser: "„Wie läuft das Geschäft?“, „Snapshot“, „catch me up“",
    voraussetzungen: "Mindestens ein Connector (z. B. Gmail/Kalender); volles Bild mit QuickBooks, PayPal, HubSpot",
    beispielPrompt: "Gib mir einen Business-Pulse mit dem einen wichtigsten Punkt für heute."
  }
},
{
  id: "email-sequence",
  datum: "2026-07-05",
  titel: "E-Mail-Strecken (marketing:email-sequence)",
  kategorie: "Marketing",
  kurz: "Mehrstufige E-Mail-Kampagnen entwerfen – mit Texten, Taktung, Verzweigungen und A/B-Ideen.",
  wasErKann: "Entwirft komplette E-Mail-Abfolgen für Onboarding, Lead-Nurturing, Reaktivierung oder Produktlaunches. Geliefert werden: voller Text jeder Mail inkl. Betreff-Varianten, zeitliche Taktung (Tag 0/3/7), Verzweigungslogik („geöffnet, nicht geklickt → Variante B“), Ausstiegsbedingungen, A/B-Test-Vorschläge, Benchmark-Orientierung und auf Wunsch ein Flussdiagramm.",
  grenzen: [
    "Der Skill entwirft nur – er versendet nichts und richtet keine Automatisierung im Mail-Tool ein.",
    "Umsetzung in Mailchimp/Klaviyo/HubSpot machst du selbst.",
    "Benchmarks sind Orientierungswerte, kein Ersatz für eigene Messdaten.",
    "Je konkreter dein Briefing (Zielgruppe, Produkt, Ton), desto weniger generisch die Texte."
  ],
  beispiele: [
    "Baue eine 5-teilige Onboarding-Sequenz für Neukunden meines Buchhaltungstools – Ziel: aktive Nutzung in 14 Tagen.",
    "Win-back-Strecke für Kunden, die 6 Monate nichts gekauft haben – 3 Mails, Rabatt erst in der letzten.",
    "Launch-Sequenz mit Teaser, Ankündigung und Follow-up, inkl. A/B-Ideen für Betreffzeilen.",
    "Zeig mir die Nurture-Strecke als Flussdiagramm mit allen Verzweigungen."
  ],
  anwendung: "Springt an bei „E-Mail-Serie“, „Drip-Kampagne“, „Nurture-Flow“, „Onboarding-Strecke“. Nenne Ziel, Zielgruppe, Mail-Anzahl, Ton und Ausstiegsbedingung. Für Einzel-Mails ist marketing:draft-content passender.",
  uebung: {
    auftrag: "Entwirf eine kurze Sequenz für einen realen oder fiktiven Anwendungsfall aus deinem Umfeld und prüfe, ob Taktung und Ausstiegslogik schlüssig sind.",
    prompt: "Entwirf eine 3-teilige Reaktivierungs-Sequenz für Kunden, die seit 6 Monaten inaktiv sind. Freundlicher Ton, Ausstieg bei Antwort oder Kauf, Taktung über 2 Wochen, je 2 Betreff-Varianten pro Mail."
  },
  quiz: [
    { frage: "Was tut der Skill NICHT?", optionen: ["Betreff-Varianten liefern", "Mails automatisch versenden", "Ausstiegsbedingungen definieren"], richtig: 1, erklaerung: "Er ist ein Entwurfs-Skill – Versand und Automation richtest du im Mail-Tool selbst ein." },
    { frage: "Was bedeutet Verzweigungslogik in einer Sequenz?", optionen: ["Mehrere Absender", "Unterschiedliche Folge-Mails je nach Verhalten (z. B. geöffnet/nicht geklickt)", "Zufällige Reihenfolge"], richtig: 1, erklaerung: "Die Strecke reagiert auf Empfängerverhalten mit unterschiedlichen Varianten." },
    { frage: "Du brauchst nur ein einzelnes Mailing. Welcher Skill passt besser?", optionen: ["marketing:draft-content", "marketing:seo-audit", "sales:forecast"], richtig: 0, erklaerung: "draft-content ist für Einzel-Inhalte; email-sequence lohnt sich erst bei Abfolgen mit Logik." }
  ],
  cheatsheet: {
    ausloeser: "„E-Mail-Serie“, „Drip-Kampagne“, „Onboarding-/Win-back-Strecke“",
    voraussetzungen: "Keine Verbindungen nötig; gutes Briefing entscheidend",
    beispielPrompt: "Entwirf eine [N]-teilige [Typ]-Sequenz für [Zielgruppe]. Ziel: [Ziel]. Ton: [Ton]. Ausstieg bei: [Bedingung]."
  }
},
{
  id: "xlsx",
  datum: "2026-07-06",
  titel: "Excel-Tabellen (xlsx)",
  kategorie: "Office",
  kurz: "Excel-Dateien mit echten Formeln, Formatierung und Diagrammen erstellen und auswerten.",
  wasErKann: "Erstellt, liest, bearbeitet und analysiert .xlsx-Dateien: Tabellen mit echten Excel-Formeln (SUMME, SVERWEIS, WENN), Zellformatierung, mehreren Arbeitsblättern und Diagrammen. Bestehende Dateien kann Claude auswerten (Summen, Trends, Ausreißer) und gezielt verändern – ohne dass du Excel öffnest.",
  grenzen: [
    "Keine externe Verbindung nötig – läuft komplett in der Sandbox.",
    "Bestehende Dateien müssen hochgeladen oder per Ordner freigegeben sein.",
    "Makros (VBA), Power Query und Pivot-Feinheiten werden nicht unterstützt; Formeln, Formatierung, Diagramme und mehrere Blätter funktionieren zuverlässig.",
    "Ergebnis ist eine echte .xlsx – öffnest du in Excel, LibreOffice oder Google Sheets."
  ],
  beispiele: [
    "Erstelle ein Haushaltsbudget 2026 mit Monatsspalten, Kategorien und Summenformeln.",
    "Werte meine Umsatzliste aus: Welche drei Produkte laufen am besten, wie ist der Monatstrend?",
    "Tilgungsplan für 20.000 € bei 5,5 % Zinsen, 48 Monate, als Excel mit Diagramm.",
    "Füge meiner Tabelle ein zweites Blatt mit Zusammenfassung und Balkendiagramm hinzu."
  ],
  anwendung: "Löst aus bei „Excel“, „Tabelle“, „.xlsx“, „Budget“, „Diagramm“. Nachbesserungen per Zuruf im selben Chat: „Mach die Kopfzeile fett.“",
  uebung: {
    auftrag: "Lass dir eine kleine Tabelle mit Formeln bauen und ändere sie danach mit einem Folgeauftrag – so erlebst du den Bearbeitungszyklus.",
    prompt: "Erstelle eine Excel-Tabelle: Monatsübersicht meiner festen Ausgaben (Miete, Versicherungen, Abos) mit Summenformel und einem Balkendiagramm. Danach: Füge eine Spalte 'jährlich' hinzu, die monatlich × 12 rechnet."
  },
  quiz: [
    { frage: "Welche Excel-Funktionalität wird NICHT unterstützt?", optionen: ["SVERWEIS-Formeln", "VBA-Makros", "Mehrere Arbeitsblätter"], richtig: 1, erklaerung: "Makros und Power Query sind ausgenommen; Formeln, Blätter, Diagramme funktionieren." },
    { frage: "Braucht der Skill eine Verbindung wie QuickBooks?", optionen: ["Ja, immer", "Nein, er läuft lokal in der Sandbox", "Nur für Diagramme"], richtig: 1, erklaerung: "Keine Connectoren nötig – Daten kommen aus deinem Auftrag oder hochgeladenen Dateien." },
    { frage: "Wie änderst du eine gerade erstellte Tabelle?", optionen: ["Neu anfangen", "Einfach im selben Chat nachbessern lassen", "Nur manuell in Excel"], richtig: 1, erklaerung: "„Füge eine Spalte hinzu“ genügt – die Datei wird direkt angepasst." }
  ],
  cheatsheet: {
    ausloeser: "„Excel“, „Tabelle“, „.xlsx“, „Budget“, „Diagramm“",
    voraussetzungen: "Keine; für Bearbeitung Datei hochladen",
    beispielPrompt: "Erstelle eine Excel-Tabelle für [Zweck] mit Spalten [A, B, C], Summenformeln und einem Diagramm."
  }
},
{
  id: "artefakte",
  datum: "2026-07-08",
  titel: "Artefakte (live aktualisierte Seiten)",
  kategorie: "Automatisierung",
  kurz: "Interaktive Seiten, die gespeichert bleiben und beim Öffnen frische Daten aus deinen Tools ziehen.",
  wasErKann: "Ein Artefakt ist eine interaktive HTML-Seite in Cowork, die über die Session hinaus erhalten bleibt und bei jedem Öffnen aktuelle Daten aus verbundenen Diensten ziehen kann – etwa ein Dashboard, ein Statusbericht oder eine sortierbare Aufgabenübersicht. Aus einer einmaligen Antwort wird eine wiederverwendbare Seite.",
  grenzen: [
    "Der Mehrwert entsteht durch verbundene Connectoren – ohne Datenquelle bleibt es eine statische Seite.",
    "Zeigt den Stand beim Öffnen bzw. nach „Neu laden“ – keine Hintergrund-Updates, keine Benachrichtigungen (dafür: schedule).",
    "Anzeigefläche, kein Tool-Ersatz: komplexe Aktionen weiterhin in der App oder im Chat.",
    "Filter-/Sortiereinstellungen bleiben gespeichert."
  ],
  beispiele: [
    "Bau mir eine Seite für jeden Morgen: heutige Termine plus ungelesene Mails der letzten 24 Stunden.",
    "Erstelle ein Artefakt, das meine Notion-Aufgaben als Board zeigt, sortierbar nach Fälligkeit.",
    "Mach aus dieser Tabelle ein Artefakt, das ich später mit aktuellen Daten neu laden kann.",
    "Übersichtsseite für den Drive-Ordner 'Skills' – alle Lektionen mit Datum und Link, bei jedem Öffnen aktuell."
  ],
  anwendung: "Auslöser: Bitte um eine „Seite“, ein „Dashboard“, einen „Tracker“ oder eine „Übersicht zum Wiederöffnen“. Faustregel: sinnvoll, wenn du dieselbe Frage mehrfach stellen wirst und sich die Daten ändern.",
  uebung: {
    auftrag: "Erstelle dein erstes eigenes Artefakt mit echten Daten aus einem verbundenen Dienst und öffne es später erneut, um den Aktualisierungseffekt zu sehen.",
    prompt: "Erstelle mir ein Artefakt: eine Morgenübersicht mit meinen heutigen Kalenderterminen und den neuesten E-Mail-Betreffs der letzten 24 Stunden, jeweils mit Uhrzeit."
  },
  quiz: [
    { frage: "Wodurch unterscheidet sich ein Artefakt von einer Chat-Antwort?", optionen: ["Es bleibt gespeichert und kann frische Daten laden", "Es ist immer schneller", "Es kann E-Mails versenden"], richtig: 0, erklaerung: "Persistenz plus Live-Daten beim Öffnen sind der Kern – Aktionen wie Mailversand gehören nicht dazu." },
    { frage: "Aktualisiert sich ein Artefakt im Hintergrund von selbst?", optionen: ["Ja, minütlich", "Nein – Stand beim Öffnen bzw. nach 'Neu laden'", "Nur nachts"], richtig: 1, erklaerung: "Pull statt Push: aktuelle Daten gibt es beim Öffnen. Für feste Zeiten ist schedule zuständig." },
    { frage: "Wann ist ein Artefakt die richtige Wahl?", optionen: ["Für einmalige Wissensfragen", "Wenn du dieselbe Frage wiederholt stellst und sich die Daten ändern", "Für das Schreiben von Verträgen"], richtig: 1, erklaerung: "Wiederkehrender Blick auf sich ändernde Daten – das ist der Einsatzzweck." }
  ],
  cheatsheet: {
    ausloeser: "„Bau mir eine Seite/ein Dashboard/einen Tracker zum Wiederöffnen“",
    voraussetzungen: "Verbundene Connectoren für den Live-Effekt (z. B. Gmail, Kalender, Drive, Notion)",
    beispielPrompt: "Erstelle ein Artefakt: [Übersicht] aus [Datenquelle], sortierbar nach [Kriterium], bei jedem Öffnen aktuell."
  }
},
{
  id: "pptx",
  datum: "2026-07-08",
  titel: "PowerPoint-Präsentationen (pptx)",
  kategorie: "Office",
  kurz: "Foliensätze erstellen, auslesen, kombinieren – inkl. Layouts, Diagrammen und Sprechernotizen.",
  wasErKann: "Erstellt, liest und bearbeitet .pptx-Dateien: komplette Foliensätze von Grund auf (Layouts, Diagramme, Tabellen, Sprechernotizen), Inhalte bestehender Präsentationen auslesen und zusammenfassen, einzelne Folien ändern oder ergänzen, mehrere Präsentationen kombinieren oder aufteilen.",
  grenzen: [
    "Feintuning (exakte Abstände, Corporate Design) prüfst du am Ende selbst in PowerPoint.",
    "Keine Verbindungen nötig; für Ablage in Drive muss die Drive-Verbindung aktiv sein.",
    "Qualität hängt vom Briefing ab: Zielgruppe, Folienzahl, Kernbotschaften nennen.",
    "Firmen-Templates als .pptx hochladen – Claude arbeitet darin weiter."
  ],
  beispiele: [
    "Erstelle eine Präsentation mit 8 Folien über unsere Quartalszahlen – Zielgruppe Geschäftsführung, nüchterner Stil.",
    "Lies die angehängte Präsentation aus und fasse die Kernaussagen pro Folie zusammen.",
    "Nimm meine Vorlage und ergänze drei Folien zum Projektstand, inkl. Sprechernotizen.",
    "Füge Folien 2–5 aus Datei A und alle aus Datei B zu einer neuen Präsentation zusammen."
  ],
  anwendung: "Löst aus bei „Präsentation“, „Foliensatz“, „Slides“, „Deck“ oder jeder .pptx-Datei. Tipp: erst deep-research für die Fakten, dann pptx für den Foliensatz.",
  uebung: {
    auftrag: "Lass dir einen kleinen Foliensatz zu einem Thema bauen, das du wirklich präsentieren könntest, und prüfe das Ergebnis in PowerPoint.",
    prompt: "Erstelle eine Präsentation mit 5 Folien: 'Was Claude-Skills im Arbeitsalltag bringen' – Titelfolie, 3 Inhaltsfolien mit je einem Praxisbeispiel, Abschlussfolie. Nüchterner Business-Stil, mit Sprechernotizen."
  },
  quiz: [
    { frage: "Was solltest du im Briefing für gute Ergebnisse nennen?", optionen: ["Nur das Thema", "Zielgruppe, Folienzahl und Kernbotschaften", "Die PowerPoint-Version"], richtig: 1, erklaerung: "Ohne diese Angaben trifft Claude Annahmen – mit ihnen sitzt der Foliensatz deutlich besser." },
    { frage: "Wie nutzt du ein Firmen-Template?", optionen: ["Geht nicht", "Als .pptx hochladen – Claude arbeitet darin weiter", "Nur per Screenshot"], richtig: 1, erklaerung: "Die hochgeladene Vorlage wird direkt weiterbearbeitet statt bei Null zu starten." },
    { frage: "Welche Skill-Kombination liefert substanzielle Präsentationen?", optionen: ["pptx + deep-research", "pptx + triage-nda", "pptx + schedule"], richtig: 0, erklaerung: "Erst recherchieren, dann in Folien gießen – deutlich besser als ein einzelner Prompt." }
  ],
  cheatsheet: {
    ausloeser: "„Präsentation“, „Foliensatz“, „Slides“, „Deck“, .pptx-Datei",
    voraussetzungen: "Keine; Template optional als .pptx hochladen",
    beispielPrompt: "Erstelle eine Präsentation mit [N] Folien zu [Thema]. Zielgruppe: [wer]. Stil: [Ton]. Mit Sprechernotizen."
  }
},
{
  id: "pdf",
  datum: "2026-07-19",
  titel: "PDF-Dateien (pdf)",
  kategorie: "Office",
  kurz: "PDFs lesen, erstellen, zusammenführen, aufteilen, ausfüllen – inklusive OCR für gescannte Dokumente.",
  wasErKann: "Der Skill deckt praktisch alles rund um PDF-Dateien ab: Text und Tabellen aus PDFs auslesen, mehrere PDFs zu einer Datei zusammenführen oder eine große Datei aufteilen, Seiten drehen, Wasserzeichen einfügen, PDF-Formulare ausfüllen, Dateien mit Passwort schützen oder entsperren (wenn du das Passwort kennst) und eingebettete Bilder extrahieren. Bei gescannten Dokumenten macht eine Texterkennung (OCR) das PDF durchsuchbar. Auch neue PDFs von Grund auf sind möglich, etwa ein Merkblatt oder ein Deckblatt.",
  grenzen: [
    "Bestehende Dateien müssen hochgeladen oder über einen verbundenen Ordner erreichbar sein – Claude sieht nicht von selbst auf deine Festplatte.",
    "PDF ist kein Bearbeitungsformat: Fließtext in einem fertigen PDF umzuschreiben ist nur begrenzt möglich – dafür besser die Quelldatei (z. B. .docx) ändern und neu exportieren.",
    "OCR-Qualität hängt vom Scan ab: schiefe, unscharfe oder handschriftliche Vorlagen liefern lückenhafte Ergebnisse.",
    "Passwortgeschützte PDFs lassen sich nur mit dem korrekten Passwort öffnen – Schutz umgehen geht nicht."
  ],
  beispiele: [
    "Füge diese drei PDFs in dieser Reihenfolge zu einer Datei zusammen.",
    "Zieh mir die Tabelle auf Seite 4 aus diesem PDF und gib sie mir als Excel.",
    "Dieses gescannte Dokument ist nicht durchsuchbar – mach eine Texterkennung und gib mir den Text.",
    "Fülle das angehängte Formular mit meinen Daten aus und versieh es mit dem Wasserzeichen 'Entwurf'."
  ],
  anwendung: "Löst aus, sobald eine .pdf-Datei im Spiel ist: „PDF zusammenfügen“, „Seiten extrahieren“, „Formular ausfüllen“, „Scan durchsuchbar machen“, „als PDF erstellen“. Datei anhängen oder Ordner verbinden, Auftrag formulieren – fertig.",
  uebung: {
    auftrag: "Nimm zwei beliebige PDFs aus deinen Unterlagen und lass sie zu einer Datei zusammenführen. Prüfe danach im Ergebnis, ob Reihenfolge und Seiten stimmen.",
    prompt: "Führe die beiden angehängten PDFs zu einer Datei zusammen – erst Dokument A, dann Dokument B. Nenne mir außerdem die Gesamtseitenzahl des Ergebnisses."
  },
  quiz: [
    { frage: "Ein gescanntes PDF lässt sich nicht durchsuchen. Was hilft?", optionen: ["Die Datei umbenennen", "Texterkennung (OCR) durch den Skill", "Ein neues Passwort setzen"], richtig: 1, erklaerung: "OCR erkennt den Text im Scan und macht das PDF durchsuchbar – die Qualität hängt von der Scanvorlage ab." },
    { frage: "Du willst den Fließtext in einem fertigen PDF komplett umschreiben. Was ist der beste Weg?", optionen: ["Direkt im PDF editieren lassen", "Die Quelldatei (z. B. .docx) ändern und neu als PDF exportieren", "Das PDF in Bilder zerlegen"], richtig: 1, erklaerung: "PDF ist ein Ausgabeformat – inhaltliche Überarbeitungen gelingen zuverlässiger in der Quelldatei." },
    { frage: "Was gilt für passwortgeschützte PDFs?", optionen: ["Claude umgeht den Schutz automatisch", "Öffnen geht nur mit dem korrekten Passwort", "Sie werden immer abgelehnt"], richtig: 1, erklaerung: "Mit bekanntem Passwort kann der Skill ent- und verschlüsseln – einen fremden Schutz knacken kann und darf er nicht." }
  ],
  cheatsheet: {
    ausloeser: "Jede .pdf-Datei: „zusammenfügen“, „aufteilen“, „Formular ausfüllen“, „OCR“, „als PDF erstellen“",
    voraussetzungen: "Keine Verbindungen nötig; Datei hochladen oder Ordner verbinden",
    beispielPrompt: "Führe die angehängten PDFs zu einer Datei zusammen und versieh jede Seite mit dem Wasserzeichen [Text]."
  }
}
];
