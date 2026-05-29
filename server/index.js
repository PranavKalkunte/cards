import express from 'express'
import crypto from 'crypto'
import path from 'path'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const PORT = process.env.PORT       || 3001
const PASS = process.env.OWNER_PASS || 'change-this-to-your-passphrase'

const DATA_FILE = path.join(__dirname, 'data.json')
let data = JSON.parse(readFileSync(DATA_FILE, 'utf8'))

function persist() {
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2))
}

// ── Auth ──────────────────────────────────────────────────────────────────
function makeToken(p) { return crypto.createHmac('sha256', 'cards').update(p).digest('hex') }

function requireAuth(req, res, next) {
  const token = (req.headers['authorization'] || '').replace(/^Bearer\s+/, '')
  if (!token || token !== makeToken(PASS)) return res.status(401).json({ error: 'Unauthorized' })
  next()
}

// ── Express ───────────────────────────────────────────────────────────────
const app = express()
app.use(express.json())

app.get('/api/data', (_req, res) => res.json(data))

app.post('/api/auth', (req, res) => {
  const { passphrase } = req.body || {}
  if (!passphrase) return res.status(400).json({ error: 'passphrase required' })
  if (makeToken(passphrase) !== makeToken(PASS)) return res.status(401).json({ error: 'Invalid passphrase' })
  res.json({ token: makeToken(PASS) })
})

app.put('/api/cards/:id', requireAuth, (req, res) => {
  data.cards[req.params.id] = req.body
  persist()
  res.json({ ok: true })
})

app.delete('/api/cards/:id', requireAuth, (req, res) => {
  delete data.cards[req.params.id]
  persist()
  res.json({ ok: true })
})

app.put('/api/folders', requireAuth, (req, res) => {
  data.folders = req.body
  persist()
  res.json({ ok: true })
})

app.put('/api/briefs/:id', requireAuth, (req, res) => {
  data.briefs[req.params.id] = req.body
  persist()
  res.json({ ok: true })
})

app.delete('/api/briefs/:id', requireAuth, (req, res) => {
  delete data.briefs[req.params.id]
  persist()
  res.json({ ok: true })
})

app.put('/api/tags/:id', requireAuth, (req, res) => {
  data.tags[req.params.id] = req.body
  persist()
  res.json({ ok: true })
})

if (process.env.NODE_ENV === 'production') {
  const distDir = path.join(__dirname, '../dist')
  app.use(express.static(distDir))
  app.get('*', (_req, res) => res.sendFile(path.join(distDir, 'index.html')))
}

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
