# Vědma 🔮

Jednostránková webová aplikace – interaktivní věštkyně, která odpoví na tvé otázky o budoucnosti.

## Jak to funguje

Uživatel zadá otázku a aplikace odešle dotaz na AI (Anthropic Claude API), 
které vygeneruje mystickou a poetickou odpověď v češtině.

## Vývoj projektu

### Verze 1 – statické odpovědi
Aplikace vytvořená pomocí HTML, CSS a JavaScriptu. 
Na základě klíčových slov (např. „kdy", „kolik", láska, práce, finance) 
určila typ dotazu a zobrazila předpřipravenou věštbu.
Projekt demonstroval práci s DOM, podmínkami, polem dat a dynamickým obsahem.

### Verze 2 – AI integrace
Aplikace rozšířena o volání Anthropic Claude API přes Netlify Functions.
Odpovědi jsou nyní generovány živě pomocí AI s vlastním systémovým promptem.
API klíč je bezpečně uložen jako environment variable na Netlify.

## Technologie
- HTML, CSS, JavaScript
- Netlify Functions (serverless backend)
- Anthropic Claude API

## Spuštění
Aplikace je dostupná na: https://vedma.netlify.app
