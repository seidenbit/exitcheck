# Changelog

Alle nennenswerten Änderungen an Exitcheck. Versionen folgen [Semantic Versioning](https://semver.org/lang/de/).

## Unveröffentlicht

### Geändert

- Kontrast: Die Schilder „Mehraufwand“ und „bleibt zurück“ sind im hellen Design dunkler und erreichen jetzt mindestens 4,5:1 (vorher 4,2:1 bzw. 3,5:1).
- Tastatur: Waagrecht scrollende Tabellen im Bericht lassen sich mit Tab erreichen und mit den Pfeiltasten scrollen. Screenreader nennen sie mit ihrer Überschrift.
- Bericht auf dem Handy: „Namen ausblenden“, „Drucken“, „Als CSV speichern“ und „Andere Datei“ liegen hinter „Optionen“, die Leiste oben ist dadurch nur noch halb so hoch. Ab 701 px Breite bleibt alles wie bisher sichtbar.
- Bericht auf dem Handy: Beim Scrollen erscheint unten rechts „↑ Abschnitte“ und springt zurück zur Abschnittsliste.
- Alle Preisannahmen und der Stundensatz stehen an einer Stelle (`src/prices.js`), jeweils mit Stand und Quelle. Die Vorgabewerte sind unverändert.
- Der Bericht nennt bei allen Vorgaben den Stand und listet unter „Grenzen der Prüfung“ die Quellen der Preisannahmen.

### Neu

- Abschnitt „Aufräumen“: Konsolidierung nötig, fast volle Datastores, Snapshots älter als 3 Tage, mehr als 3 Snapshots je VM, möglicherweise verwaiste Dateien (vHealth), ausgeschaltete VMs, Vorlagen und eingelegte ISO-Abbilder – jeweils mit belegtem Speicher. Schwellen im Bericht änderbar, Aufräumliste als CSV, „Namen ausblenden“ gilt auch für Dateipfade.
- Aufräumen: Thick-Disks mit viel freiem Platz im Gast (geschätzter Gewinn durch Thin-Umstellung, aus vPartition) und Datastores ohne VMs.
- Der Überblick nennt den Speicher, der zum Aufräumen geprüft werden sollte.
- Fehlen die Blätter vHealth oder vCD, nennt der Bericht das unter „Grenzen der Prüfung“.
- Beispieldaten um verwaiste Dateien, eine Konsolidierung, eine lange Snapshot-Kette und einen fast vollen Datastore, Thick-Disks, Partitionen und einen leeren Datastore ergänzt.
- `docs/preise.md`: Übersicht der Preisannahmen und Ablauf zum Aktualisieren.
- `npm run coverage`: Tests mit Abdeckungsbericht und Mindestwerten (Zeilen 90 %, Zweige 80 %, Funktionen 90 %); läuft in der CI.
- `tools/check-prices.mjs` warnt in der CI, wenn eine Preisannahme älter als sechs Monate ist.
- Die Versionsprüfung vergleicht zusätzlich den neuesten Changelog-Eintrag.

## 0.1.1 – 2026-10-29

- Anleitung für Export und Auswertung (`docs/anleitung.md`), verlinkt in README und Seite.

## 0.1.0 – 2026-10-28

Erste Version.

- Liest RVTools-Exporte (xlsx oder CSV-Dateien je Blatt) vollständig im Browser; die Content-Security-Policy verbietet jede Netzwerkverbindung.
- Kostenvergleich: Broadcom-Lizenz nach Kernen gegen Proxmox-VE-Subskription nach Sockeln und Hyper-V, über einen wählbaren Zeitraum und inklusive Umzug.
- Stolpersteine je VM für Proxmox VE und Hyper-V.
- Aufwandsschätzung in Personentagen und reine Kopierzeit.
- „Namen ausblenden“ für Bericht, Druck und CSV-Export; eingebaute Beispieldaten.
