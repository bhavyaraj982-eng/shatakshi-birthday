export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method === 'POST') {
    return res.status(200).json({ value: Date.now() % 100000, success: true });
  }
  
  if (req.method === 'GET') {
    return res.status(200).json({ value: Math.floor(Math.random() * 100000) + 1 });
  }
  
  res.status(405).json({ error: 'Method not allowed' });
}
