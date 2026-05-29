const token = () => localStorage.getItem('auth_token')
const auth  = () => ({ 'Content-Type': 'application/json', ...(token() ? { Authorization: `Bearer ${token()}` } : {}) })

async function req(method, path, body) {
  const r = await fetch(`/api${path}`, { method, headers: auth(), ...(body ? { body: JSON.stringify(body) } : {}) })
  if (r.status === 401) { localStorage.removeItem('auth_token'); window.location.reload() }
  return r
}

export const loadData     = ()         => fetch(import.meta.env.PROD ? '/data.json' : '/api/data').then(r => r.json())
export const authenticate = async (p)  => {
  const r = await fetch('/api/auth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ passphrase: p }) })
  if (!r.ok) return false
  const { token: t } = await r.json()
  localStorage.setItem('auth_token', t)
  return true
}
export const logout      = ()         => { localStorage.removeItem('auth_token') }
export const saveCard    = (card)     => req('PUT',    `/cards/${card.id}`, card)
export const delCard     = (id)       => req('DELETE', `/cards/${id}`)
export const saveFolders = (tree)     => req('PUT',    '/folders', tree)
export const saveBrief   = (brief)    => req('PUT',    `/briefs/${brief.id}`, brief)
export const delBrief    = (id)       => req('DELETE', `/briefs/${id}`)
export const saveTag     = (tag)      => req('PUT',    `/tags/${tag.id}`, tag)
