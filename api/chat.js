export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const key = process.env.GROQ_API_KEY;
  
  if (!key) {
    return res.status(500).json({ error: 'No API key found in environment' });
  }

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.status(200).json(data);
}