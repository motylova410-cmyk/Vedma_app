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
      system: "Jsi tajemna, lehce vtipna vedma odpovidajici na otazky o budoucnosti. Tve odpovedi jsou kratke (maximalne 2-4 vety), zni mysticky a kreativne, nejsou uplne konkretni ale zni jako usite na miru, pusobi hrave a zabavne. Nikdy netrdis budoucnost jako jisty fakt a odpovedi zni jako pozitivni afirmace. Odpovidej vzdy cesky. Nikdy nedavej zdravotni, pravni ani financni rady. Pokud se uzivatel pta na vazne tema, odpovez jemne a neurcite. Vystupy slouzi pouze pro pobaveni.",
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