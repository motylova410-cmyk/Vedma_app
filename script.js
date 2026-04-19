// DATA - věštby podle kategorií
const predictions = {
  laska: [
    "Ve věcech srdce se brzy něco změní.",
    "Někdo na tebe myslí víc, než tušíš.",
    "Láska přichází tiše, ale jistě.",
    "Někdo k tobě chová city, které brzy vyjdou najevo.",
    "Tvé srdce najde odpověď, kterou už dlouho hledáš."
  ],
  prace: [
    "V pracovní oblasti tě čeká nový impuls.",
    "Brzy se objeví příležitost, kterou nebude dobré přehlédnout.",
    "Tvé úsilí začne nést výsledky.",
    "Tvé úsilí začne přinášet viditelné výsledky.",
    "Čeká tě změna, která tě posune o krok dál."
  ],
  penize: [
    "Finance vypadají stabilněji, než se teď zdá.",
    "Brzy přijde menší, ale příjemné překvapení.",
    "Křišťálová koule radí neutrácet zbytečně.",
    "Finance se začínají vyvíjet lepším směrem.",
    "Brzy přijde menší, ale příjemné finanční překvapení.",
    "Tvé peníze přinesou stabilitu, kterou jsi hledala."
  ],
  obecne: [
    "Budoucnost je mlhavá, ale slibná.",
    "Brzy se vyjasní něco, co tě teď mate.",
    "Změna přichází v nečekaný okamžik.",
    "Brzy se něco obrátí ve tvůj prospěch.",
    "Nečekaná událost ti otevře nové možnosti.",
    "Situace se vyvine jinak, než čekáš.",
    "To, co přichází, tě mile překvapí.",
    "Osud ti brzy ukáže novou cestu.",
    "Malý okamžik spustí velkou změnu.",
    "To, co se zdá nejisté, se vyjasní.",
    "Blíží se rozhodnutí, které vše posune.",
    "Nový začátek je blíž, než si myslíš.",
    "Změna přichází v ten správný čas."
  ],
  kdy: [
    "Vidím to brzy - dřív, než se naděješ, ale až ve chvíli, kdy přestaneš tlačit.",
    "Na časové ose se to rýsuje během několika týdnů, možná měsíců.",
    "Nepřijde to hned, ale ani ne pozdě - spíš ve správný okamžik, který poznáš.",
    "Křišťálová koule šeptá: mezi dvěma důležitými událostmi, které teprve přijdou.",
    "Stane se to tehdy, kdy to bude dávat největší smysl - a to poznáš podle klidu, který ucítíš."
  ],
  kolik: [
    "Vidím číslo, které tě možná překvapí",
    "Přesný počet se ukáže až časem.",
    "Křišťálová koule naznačuje, že toho bude tolik, kolik uneseš a zvládneš.",
    "Počet ještě není pevně daný - část osudu je napsaná a část závisí na tvých krocích.",
    "Vidím číslo, které je větší, než by sis možná právě teď tipla."
  ]
};

// NAČTENÍ ELEMENTŮ
const button = document.getElementById("askBtn");
const textarea = document.getElementById("question");
const answer = document.getElementById("answer");

// RANDOM PLACEHOLDER
const placeholders = [
  "Najdu letos lásku?",
  "Změním práci?",
  "Zlepší se moje finance?",
  "Co mě čeká příští měsíc?"
];

const randomIndex = Math.floor(Math.random() * placeholders.length);
textarea.placeholder = placeholders[randomIndex];

// FUNKCE PRO URČENÍ KATEGORIE
function getCategory(text) {
  text = text.toLowerCase();

  const timeKeywords = ["kdy", "kdy?", "za jak dlouho", "jak dlouho"];
  const quantityKeywords = ["kolik", "kolik?", "kolik budu", "kolik budu mít", "kolik budu mit"];

  const loveKeywords = ["lásk", "laska", "vztah", "partner", "milen", "manžel", "manzel"];
  const workKeywords = ["prác", "prace", "kariér", "kariera", "zaměst", "zamest", "job"];
  const moneyKeywords = ["peníz", "peniz", "financ", "plat", "výdě", "vyde"];

  // typ otázky
  if (timeKeywords.some(word => text.includes(word))) {
    return "kdy";
  }

  if (quantityKeywords.some(word => text.includes(word))) {
    return "kolik";
  }

  // téma
  if (loveKeywords.some(word => text.includes(word))) {
    return "laska";
  }

  if (workKeywords.some(word => text.includes(word))) {
    return "prace";
  }

  if (moneyKeywords.some(word => text.includes(word))) {
    return "penize";
  }

  // fallback
  return "obecne";
}

// FUNKCE PRO NÁHODNOU ODPOVĚĎ
function getRandomPrediction(category) {
  const arr = predictions[category];
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// HLAVNÍ LOGIKA PO KLIKNUTÍ
button.addEventListener("click", function () {
  const questionText = textarea.value.trim();

  if (questionText === "") {
    answer.textContent = "Nejprve napiš otázku.";
    return;
  }

  answer.textContent = "🔮 Vědma nahlíží do budoucnosti...";

  setTimeout(() => {
    const category = getCategory(questionText);
    const result = getRandomPrediction(category);
    answer.textContent = result;
  }, 2000);
});