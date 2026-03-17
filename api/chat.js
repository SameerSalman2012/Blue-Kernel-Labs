module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const key = process.env.GROQ_API_KEY;

  if (!key) {
    return res.status(500).json({ error: 'No API key found' });
  }

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer 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`
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.status(200).json(data);
}
