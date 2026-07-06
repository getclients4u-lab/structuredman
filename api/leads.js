// StructuredMan — Leads Retrieval API (Admin Only)
// GET /api/leads?password=SECRET — returns all captured leads
export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  // Auth check
  const adminPassword = process.env.ADMIN_PASSWORD;
  const providedPassword = req.query.password || req.headers['x-admin-password'];

  if (!adminPassword || providedPassword !== adminPassword) {
    return res.status(401).json({ error: 'Unauthorized. Invalid or missing admin password.' });
  }

  try {
    const GITHUB_TOKEN = process.env.GH_TOKEN;
    const OWNER = 'getclients4u-lab';
    const REPO = 'structuredman-leads';
    const FILE_PATH = 'leads.json';

    const getRes = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github+json'
        }
      }
    );

    if (!getRes.ok) {
      throw new Error(`Failed to fetch leads: ${getRes.status}`);
    }

    const fileData = await getRes.json();
    const leads = JSON.parse(
      Buffer.from(fileData.content, 'base64').toString('utf-8')
    );

    // Return most recent first
    leads.reverse();

    return res.status(200).json({
      total: leads.length,
      leads,
      lastUpdated: fileData.commit?.commit?.committer?.date || new Date().toISOString()
    });

  } catch (err) {
    console.error('❌ Leads fetch error:', err);
    return res.status(500).json({ error: 'Failed to retrieve leads.' });
  }
}
