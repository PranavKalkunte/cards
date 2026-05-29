import express from 'express'
import Database from 'better-sqlite3'
import crypto from 'crypto'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const PORT = process.env.PORT || 3001
const PASS = process.env.OWNER_PASS || 'change-this-to-your-passphrase'

const db = new Database(path.join(__dirname, 'data.db'))

db.exec(`
  CREATE TABLE IF NOT EXISTS cards   (id TEXT PRIMARY KEY, data TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS briefs  (id TEXT PRIMARY KEY, data TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS tags    (id TEXT PRIMARY KEY, data TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS folders (id TEXT PRIMARY KEY, data TEXT NOT NULL);
`)

// ── Seed data ──────────────────────────────────────────────────────────────
const now = Date.now(), d = 86400000

const SEED_TAGS = {
  'tg-climate':    { id: 'tg-climate',    name: 'Climate' },
  'tg-tipping':    { id: 'tg-tipping',    name: 'Tipping Points' },
  'tg-sea-level':  { id: 'tg-sea-level',  name: 'Sea Level' },
  'tg-economics':  { id: 'tg-economics',  name: 'Economics' },
  'tg-ai-safety':  { id: 'tg-ai-safety',  name: 'AI Safety' },
  'tg-xrisk':      { id: 'tg-xrisk',      name: 'Existential Risk' },
  'tg-democracy':  { id: 'tg-democracy',  name: 'Democracy' },
  'tg-governance': { id: 'tg-governance', name: 'Governance' },
}

const SEED_CARDS = {
  c1: { id:'c1', author:'Lenton et al', year:'2019', source:'Nature — "Climate tipping points—too risky to bet against"', sourceUrl:'https://www.nature.com/articles/d41586-019-03595-0', tagIds:['tg-climate','tg-tipping'], tagline:'Tipping cascades risk civilizational destabilization', pinned:false, createdAt: now - d*61, segments:[{text:'The growing threat of abrupt and irreversible changes in the Earth system, or ',type:'context'},{text:'tipping points, ',type:'highlight'},{text:'is receiving increasingly widespread attention. Contemporary climate change is increasing the risks of ',type:'context'},{text:'crossing these thresholds — ',type:'highlight'},{text:'and once crossed, they are ',type:'context'},{text:'likely irreversible ',type:'power'},{text:'on human timescales. Moreover, some tipping points could ',type:'context'},{text:'trigger cascading failures ',type:'power'},{text:'across interconnected Earth systems, potentially leading to a ',type:'highlight'},{text:'"hothouse Earth" ',type:'power'},{text:'scenario in which stabilizing the climate may no longer be possible regardless of future human action.',type:'context'}] },
  c2: { id:'c2', author:'IPCC', year:'2022', source:'AR6 Working Group II — "Impacts, Adaptation and Vulnerability"', sourceUrl:'https://www.ipcc.ch/report/ar6/wg2/', tagIds:['tg-climate','tg-sea-level'], tagline:'Coastal collapse becomes locked-in under current trajectories', pinned:false, createdAt: now - d*48, segments:[{text:'Sea level rise poses a fundamental and growing threat to low-lying coastal areas and small island nations worldwide. ',type:'context'},{text:'Even under aggressive mitigation scenarios, ',type:'highlight'},{text:'committed sea level rise will continue for centuries ',type:'power'},{text:'due to thermal inertia already stored in the ocean. ',type:'highlight'},{text:'Current trajectories could displace hundreds of millions, ',type:'context'},{text:'render entire coastal civilizations uninhabitable, ',type:'power'},{text:'and trigger geopolitical instability at a scale that no existing institution is prepared to manage.',type:'context'}] },
  c3: { id:'c3', author:'Burke, Davis & Diffenbaugh', year:'2018', source:'Nature — "Large potential reduction in economic damages under UN mitigation targets"', sourceUrl:'https://www.nature.com/articles/s41586-018-0071-9', tagIds:['tg-climate','tg-economics'], tagline:'Carbon pricing is the necessary and sufficient economic lever', pinned:false, createdAt: now - d*35, segments:[{text:'Optimal climate policy requires ',type:'context'},{text:'a price on carbon reflecting the full social cost of emissions. ',type:'highlight'},{text:'Without such pricing, markets systematically ',type:'context'},{text:'underinvest in clean technologies ',type:'power'},{text:'and overproduce fossil fuels relative to the socially optimal level. ',type:'highlight'},{text:'Voluntary measures, standards, and regulatory approaches ',type:'context'},{text:'cannot achieve the breadth and depth of economic transformation ',type:'highlight'},{text:'required across all sectors simultaneously.',type:'context'}] },
  c4: { id:'c4', author:'Russell', year:'2019', source:'Human Compatible — Penguin Random House', sourceUrl:'https://humancompatible.ai/', tagIds:['tg-ai-safety','tg-governance'], tagline:'Misaligned AI poses extinction-level risk absent governance', pinned:false, createdAt: now - d*22, segments:[{text:'The standard model of AI — machines optimizing a fixed objective — is ',type:'context'},{text:'fundamentally broken. ',type:'power'},{text:'A sufficiently capable system given the wrong objective will ',type:'context'},{text:'resist correction, acquire unbounded resources, ',type:'power'},{text:'and eliminate any obstacle to its goal ',type:'highlight'},{text:'— including, where necessary, ',type:'context'},{text:'human beings. ',type:'power'},{text:'This is not science fiction. It is a straightforward consequence of how optimization works. The race to deploy increasingly powerful systems without solving alignment ',type:'context'},{text:'may be the last mistake our species makes.',type:'highlight'}] },
  c5: { id:'c5', author:'Levitsky & Ziblatt', year:'2018', source:'How Democracies Die — Crown Publishers', sourceUrl:'https://www.penguinrandomhouse.com/books/562246/how-democracies-die-by-steven-levitsky-and-daniel-ziblatt/', tagIds:['tg-democracy','tg-governance'], tagline:'Democratic erosion proceeds quietly through legal channels', pinned:false, createdAt: now - d*14, segments:[{text:'Democratic breakdown today rarely happens at the hands of generals. ',type:'context'},{text:'Elected autocrats ',type:'power'},{text:'use the very institutions of democracy to dismantle it. ',type:'highlight'},{text:'They win elections, then deploy their mandates to ',type:'context'},{text:'pack courts, silence press, ',type:'power'},{text:'and rewrite electoral rules to entrench their advantage. ',type:'highlight'},{text:'The erosion is gradual and ',type:'context'},{text:'legal at every step. ',type:'power'},{text:'By the time citizens recognize what has happened, the institutional guardrails are already gone.',type:'context'}] },
  c6: { id:'c6', author:'Ord', year:'2020', source:'The Precipice — Hachette Books', sourceUrl:'https://theprecipice.com/', tagIds:['tg-xrisk','tg-ai-safety'], tagline:"The present century is humanity's most dangerous passage", pinned:false, createdAt: now - d*7, segments:[{text:'For most of human history, the risks we faced were ',type:'context'},{text:'local and recoverable. ',type:'highlight'},{text:'We now live in a world where a single miscalculation could ',type:'context'},{text:"permanently foreclose humanity's long-run potential. ",type:'power'},{text:'The probability of existential catastrophe this century is ',type:'context'},{text:'roughly one in six — ',type:'power'},{text:'comparable to a game of Russian roulette. ',type:'highlight'},{text:'Unlike all prior risks, these threats are ',type:'context'},{text:'anthropogenic, irreversible, ',type:'power'},{text:'and tractable — making this the most important period in the history of our species.',type:'context'}] },
}

const SEED_FOLDERS = [
  { id:'f-climate', name:'Climate', type:'folder', children:[
    { id:'f-climate-impacts', name:'Impacts', type:'folder', children:['c1','c2'] },
    { id:'f-climate-solutions', name:'Solutions', type:'folder', children:['c3'] },
  ]},
  { id:'f-tech', name:'Technology', type:'folder', children:[
    { id:'f-tech-ai', name:'AI Safety', type:'folder', children:['c4','c6'] },
  ]},
  { id:'f-politics', name:'Politics', type:'folder', children:[
    { id:'f-politics-democracy', name:'Democracy', type:'folder', children:['c5'] },
  ]},
]

const SEED_BRIEFS = {
  b1: { id:'b1', name:'Climate Impacts', description:'The compounding case for treating climate change as civilizational risk rather than a policy externality.', cardIds:['c1','c2','c3'], createdAt: now - d*30 },
  b2: { id:'b2', name:'AI Governance', description:'Why advanced AI demands a fundamentally different regulatory regime than prior technologies.', cardIds:['c4','c6'], createdAt: now - d*9 },
}

// Seed if cards table is empty
const cardCount = db.prepare('SELECT COUNT(*) as n FROM cards').get()
if (cardCount.n === 0) {
  const insertCard   = db.prepare('INSERT INTO cards   (id, data) VALUES (?, ?)')
  const insertTag    = db.prepare('INSERT INTO tags    (id, data) VALUES (?, ?)')
  const insertBrief  = db.prepare('INSERT INTO briefs  (id, data) VALUES (?, ?)')
  const insertFolder = db.prepare('INSERT INTO folders (id, data) VALUES (?, ?)')

  const seed = db.transaction(() => {
    for (const card of Object.values(SEED_CARDS))   insertCard.run(card.id,   JSON.stringify(card))
    for (const tag  of Object.values(SEED_TAGS))    insertTag.run(tag.id,    JSON.stringify(tag))
    for (const brief of Object.values(SEED_BRIEFS)) insertBrief.run(brief.id, JSON.stringify(brief))
    insertFolder.run('root', JSON.stringify(SEED_FOLDERS))
  })
  seed()
  console.log('Seeded database with sample data.')
}

// ── Auth helpers ───────────────────────────────────────────────────────────
function makeToken(passphrase) {
  return crypto.createHmac('sha256', 'cards').update(passphrase).digest('hex')
}

function requireAuth(req, res, next) {
  const header = req.headers['authorization'] || ''
  const token  = header.replace(/^Bearer\s+/, '')
  const expected = makeToken(PASS)
  if (!token || token !== expected) return res.status(401).json({ error: 'Unauthorized' })
  next()
}

// ── DB helpers ────────────────────────────────────────────────────────────
function getAllRows(table) {
  const rows = db.prepare(`SELECT id, data FROM ${table}`).all()
  const result = {}
  for (const row of rows) result[row.id] = JSON.parse(row.data)
  return result
}

function upsert(table, id, data) {
  db.prepare(`INSERT INTO ${table} (id, data) VALUES (?, ?) ON CONFLICT(id) DO UPDATE SET data=excluded.data`)
    .run(id, JSON.stringify(data))
}

function del(table, id) {
  db.prepare(`DELETE FROM ${table} WHERE id=?`).run(id)
}

// ── Express app ───────────────────────────────────────────────────────────
const app = express()
app.use(express.json())

// Public: load all data
app.get('/api/data', (req, res) => {
  const cards   = getAllRows('cards')
  const briefs  = getAllRows('briefs')
  const tags    = getAllRows('tags')

  const foldersRow = db.prepare('SELECT data FROM folders WHERE id=?').get('root')
  const folders = foldersRow ? JSON.parse(foldersRow.data) : []

  res.json({ cards, folders, briefs, tags })
})

// Public: authenticate
app.post('/api/auth', (req, res) => {
  const { passphrase } = req.body || {}
  if (!passphrase) return res.status(400).json({ error: 'passphrase required' })
  const expected = makeToken(PASS)
  const provided = makeToken(passphrase)
  if (provided !== expected) return res.status(401).json({ error: 'Invalid passphrase' })
  res.json({ token: provided })
})

// Protected: cards
app.put('/api/cards/:id', requireAuth, (req, res) => {
  const card = req.body
  upsert('cards', req.params.id, card)
  res.json({ ok: true })
})

app.delete('/api/cards/:id', requireAuth, (req, res) => {
  del('cards', req.params.id)
  res.json({ ok: true })
})

// Protected: folders (single root row)
app.put('/api/folders', requireAuth, (req, res) => {
  const tree = req.body
  upsert('folders', 'root', tree)
  res.json({ ok: true })
})

// Protected: briefs
app.put('/api/briefs/:id', requireAuth, (req, res) => {
  upsert('briefs', req.params.id, req.body)
  res.json({ ok: true })
})

app.delete('/api/briefs/:id', requireAuth, (req, res) => {
  del('briefs', req.params.id)
  res.json({ ok: true })
})

// Protected: tags
app.put('/api/tags/:id', requireAuth, (req, res) => {
  upsert('tags', req.params.id, req.body)
  res.json({ ok: true })
})

// Production: serve Vite build
if (process.env.NODE_ENV === 'production') {
  const distDir = path.join(__dirname, '../dist')
  app.use(express.static(distDir))
  app.get('*', (req, res) => res.sendFile(path.join(distDir, 'index.html')))
}

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
