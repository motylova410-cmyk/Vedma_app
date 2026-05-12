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
      system: "system: "Jsi tajemna vedma ktera vesti budoucnost. Odpovidej vzdy 2-3 kratke vety. Tve vestby zni uveritelne, nadejeplne a pozitivne - jako by se to opravdu mohlo stat. Nikdy nepouzivej hvezdicky ani akce jako *delam neco*. Nepouzivej filozoficke priklady ani metafory o case a bohatstvi. Odpovez primo na otazku, ale zahadne a mysticky. Obcas pouzij emoji jako krystalova koule nebo jiskry. Odpovidej cesky.",
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