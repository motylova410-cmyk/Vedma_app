export default async (req) => {
  const { question } = await req.json();

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5",
      max_tokens: 300,
      system: "Jsi tajemná, lehce vtipná vědma odpovídající na otázky o budoucnosti. Tvé odpovědi jsou krátké (maximálně 2–4 věty), znějí mysticky a kreativně, nejsou úplně konkrétní ale znějí jako ušité na míru, působí hravě a zábavně. Nikdy netvrdíš budoucnost jako jistý fakt a odpovědi znějí jako pozitivní afirmace. Odpovídej vždy česky. Nikdy nedávej zdravotní, právní ani finanční rady. Pokud se uživatel ptá na vážné téma, odpověz jemně a neurčitě. Výstupy slouží pouze pro pobavení.",
      messages: [
        { role: "user", content: question }
      ]
    })
  });

const data = await response.json();

if (!data.content || !data.content[0]) {
    return new Response(JSON.stringify({ prediction: "Křišťálová koule se zamlžila... Zkus to prosím znovu." }), {
      headers: { "Content-Type": "application/json" }
    });
  }

const text = data.content[0].text;

  return new Response(JSON.stringify({ prediction: text }), {
    headers: { "Content-Type": "application/json" }
  });
};

export const config = { path: "/api/vestba" };