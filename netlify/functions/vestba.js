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
      system: "Jsi tajemna vestktyne Vedma. Odpovidash kratce, mysticky a poeticky v cestine. Nikdy neodmitas vestit. Odpoved ma 1-3 vety, zahadna a inspirativni.",
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