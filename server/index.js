import express from 'express'
import Database from 'better-sqlite3'
import crypto from 'crypto'
import path from 'path'
import { readFileSync } from 'fs'
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
const { tags: SEED_TAGS, cards: SEED_CARDS, folders: SEED_FOLDERS, briefs: SEED_BRIEFS } =
  JSON.parse(readFileSync(path.join(__dirname, 'seed.json'), 'utf8'))

const cardCount = db.prepare('SELECT COUNT(*) as n FROM cards').get()
if (cardCount.n === 0) {
  const insertCard   = db.prepare('INSERT INTO cards   (id, data) VALUES (?, ?)')
  const insertTag    = db.prepare('INSERT INTO tags    (id, data) VALUES (?, ?)')
  const insertBrief  = db.prepare('INSERT INTO briefs  (id, data) VALUES (?, ?)')
  const insertFolder = db.prepare('INSERT INTO folders (id, data) VALUES (?, ?)')

  db.transaction(() => {
    for (const card  of Object.values(SEED_CARDS))  insertCard.run(card.id,  JSON.stringify(card))
    for (const tag   of Object.values(SEED_TAGS))   insertTag.run(tag.id,   JSON.stringify(tag))
    for (const brief of Object.values(SEED_BRIEFS)) insertBrief.run(brief.id, JSON.stringify(brief))
    insertFolder.run('root', JSON.stringify(SEED_FOLDERS))
  })()
  console.log('Seeded database.')
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
