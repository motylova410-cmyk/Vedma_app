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

  if (text.includes("láska") || text.includes("vztah") || text.includes("partner")) {
    return "laska";
  } else if (text.includes("práce") || text.includes("kariéra") || text.includes("zaměstnání")) {
    return "prace";
  } else if (text.includes("peníze") || text.includes("finance")) {
    return "penize";
  } else {
    return "obecne";
  }
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

  // validace
  if (questionText === "") {
    answer.textContent = "Nejprve napiš otázku.";
    return;
  }

  // simulace "věštění"
  answer.textContent = "🔮 Vědma nahlíží do budoucnosti...";

  setTimeout(() => {
    const category = getCategory(questionText);
    const result = getRandomPrediction(category);
    answer.textContent = result;
  }, 2000); // 2 sekunda delay pro efekt
});