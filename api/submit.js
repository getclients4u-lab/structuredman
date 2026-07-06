// StructuredMan — Lead Capture API
// POST /api/submit — captures form submissions to GitHub repo
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { name, email, stage, children } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    if (!email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Build lead record
    const lead = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      stage: stage || 'Not specified',
      children: children || 'Not specified',
      source: 'structuredman',
      capturedAt: new Date().toISOString()
    };

    // GitHub API config
    const GITHUB_TOKEN = process.env.GH_TOKEN;
    const OWNER = 'getclients4u-lab';
    const REPO = 'structuredman-leads';
    const FILE_PATH = 'leads.json';

    // Fetch current leads file
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
      throw new Error(`Failed to fetch leads file: ${getRes.status}`);
    }

    const fileData = await getRes.json();
    const currentContent = JSON.parse(
      Buffer.from(fileData.content, 'base64').toString('utf-8')
    );

    // Append new lead
    currentContent.push(lead);

    // Write back
    const putRes = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: `Lead: ${lead.name} <${lead.email}>`,
          content: Buffer.from(JSON.stringify(currentContent, null, 2)).toString('base64'),
          sha: fileData.sha
        })
      }
    );

    if (!putRes.ok) {
      const errBody = await putRes.text();
      throw new Error(`Failed to save lead: ${putRes.status} — ${errBody}`);
    }

    console.log(`✅ Lead captured: ${lead.name} <${lead.email}>`);

    return res.status(200).json({
      success: true,
      message: 'Welcome to StructuredMan. Check your email for Phase 1 access!',
      lead: { id: lead.id, name: lead.name }
    });

  } catch (err) {
    console.error('❌ Lead capture error:', err);
    return res.status(500).json({
      error: 'Something went wrong. Please try again or email us at hello@structuredman.com.'
    });
  }
}
