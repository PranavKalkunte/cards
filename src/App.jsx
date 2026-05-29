import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Cuts from './components/Cuts'
import Files from './components/Files'
import Briefs from './components/Briefs'
import CardModal from './components/CardModal'
import CardEditor from './components/CardEditor'
import AuthModal from './components/AuthModal'
import Footer from './components/Footer'
import { OwnerContext } from './OwnerContext'
import * as api from './api'
import {
  removeCardFromTree,
  addCardToFolder,
  addFolderToTree,
  renameFolderInTree,
  deleteFolderFromTree,
} from './utils'

export default function App() {
  const [activeTab,        setActiveTab]        = useState('cuts')
  const [cards,            setCards]            = useState({})
  const [folders,          setFolders]          = useState([])
  const [tags,             setTags]             = useState({})
  const [briefs,           setBriefs]           = useState({})
  const [loading,          setLoading]          = useState(true)
  const [openCardId,       setOpenCardId]       = useState(null)
  const [editCard,         setEditCard]         = useState(null)
  const [selectedFolderId, setSelectedFolderId] = useState(null)
  const [activeBriefId,    setActiveBriefId]    = useState(null)
  const [dark,      setDark]      = useState(() => localStorage.getItem('dark') === '1')
  const [isOwner,   setIsOwner]   = useState(false)
  const [showAuth,  setShowAuth]  = useState(false)

  useEffect(() => {
    setIsOwner(!!localStorage.getItem('auth_token'))
    api.loadData().then(data => {
      setCards(data.cards || {})
      setFolders(data.folders || [])
      setTags(data.tags || {})
      setBriefs(data.briefs || {})
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('dark', dark ? '1' : '0')
  }, [dark])

  async function handleAuth(passphrase) {
    const ok = await api.authenticate(passphrase)
    if (ok) setIsOwner(true)
    return ok
  }

  function handleLogout() {
    api.logout()
    setIsOwner(false)
  }

  function mutateFolders(transform) {
    setFolders(prev => {
      const next = transform(prev)
      api.saveFolders(next)
      return next
    })
  }

  const openCard = openCardId ? cards[openCardId] : null

  function handleSave(card, folderId) {
    const saved = { ...card, createdAt: cards[card.id]?.createdAt || Date.now() }
    setCards(prev => ({ ...prev, [card.id]: saved }))
    api.saveCard(saved)

    mutateFolders(prev => {
      let tree = removeCardFromTree(prev, card.id)
      if (folderId) tree = addCardToFolder(tree, folderId, card.id)
      return tree
    })

    const newTags = { ...tags }
    let changed = false
    for (const tid of (card.tagIds || [])) {
      if (!newTags[tid]) {
        newTags[tid] = { id: tid, name: tid.replace(/^tg-/, '').replace(/-/g, ' ') }
        api.saveTag(newTags[tid])
        changed = true
      }
    }
    if (changed) setTags(newTags)
    setEditCard(null)
  }

  function handleAddFolder(parentId, name) {
    mutateFolders(prev => addFolderToTree(prev, parentId, {
      id: `f-${Date.now()}`, name, type: 'folder', children: [],
    }))
  }

  function handleRenameFolder(id, name) {
    mutateFolders(prev => renameFolderInTree(prev, id, name))
  }

  function handleDeleteFolder(id) {
    mutateFolders(prev => deleteFolderFromTree(prev, id))
    if (selectedFolderId === id) setSelectedFolderId(null)
  }

  function handleMoveCard(cardId, targetFolderId) {
    mutateFolders(prev => {
      let tree = removeCardFromTree(prev, cardId)
      if (targetFolderId) tree = addCardToFolder(tree, targetFolderId, cardId)
      return tree
    })
  }

  function handleNavigateToFolder(folderId) {
    setSelectedFolderId(folderId)
    setActiveTab('files')
    setOpenCardId(null)
  }

  function handleDelete(cardId) {
    setCards(prev => { const n = { ...prev }; delete n[cardId]; return n })
    mutateFolders(prev => removeCardFromTree(prev, cardId))
    setBriefs(prev => {
      const n = { ...prev }
      for (const bid in n) {
        n[bid] = { ...n[bid], cardIds: n[bid].cardIds.filter(id => id !== cardId) }
      }
      return n
    })
    api.delCard(cardId)
    setEditCard(null)
  }

  function handleTogglePin(cardId) {
    setCards(prev => {
      const updated = { ...prev, [cardId]: { ...prev[cardId], pinned: !prev[cardId].pinned } }
      api.saveCard(updated[cardId])
      return updated
    })
  }

  function handleSaveBrief(brief) {
    setBriefs(prev => ({ ...prev, [brief.id]: brief }))
    api.saveBrief(brief)
  }

  function handleUpdateBrief(briefId, updates) {
    setBriefs(prev => {
      const updated = { ...prev, [briefId]: { ...prev[briefId], ...updates } }
      api.saveBrief(updated[briefId])
      return updated
    })
  }

  function handleDeleteBrief(briefId) {
    setBriefs(prev => { const n = { ...prev }; delete n[briefId]; return n })
    if (activeBriefId === briefId) setActiveBriefId(null)
    api.delBrief(briefId)
  }

  function handleTabChange(tab) {
    setActiveTab(tab)
    if (tab !== 'briefs') setActiveBriefId(null)
    window.scrollTo(0, 0)
  }

  if (loading) return null

  return (
    <OwnerContext.Provider value={isOwner}>
      <div>
        <Navigation
          activeTab={activeTab}
          onTabChange={handleTabChange}
          onNew={() => setEditCard({ isNew: true })}
          dark={dark}
          onToggleDark={() => setDark(d => !d)}
          onOwnerLogout={handleLogout}
        />

        {activeTab === 'cuts' && (
          <Cuts
            cards={cards}
            tags={tags}
            onCardClick={setOpenCardId}
            onTogglePin={handleTogglePin}
          />
        )}

        {activeTab === 'files' && (
          <Files
            folders={folders}
            cards={cards}
            tags={tags}
            selectedFolderId={selectedFolderId}
            onSelectFolder={setSelectedFolderId}
            onCardClick={setOpenCardId}
            onAddFolder={handleAddFolder}
            onRenameFolder={handleRenameFolder}
            onDeleteFolder={handleDeleteFolder}
            onMoveCard={handleMoveCard}
          />
        )}

        {activeTab === 'briefs' && (
          <Briefs
            briefs={briefs}
            cards={cards}
            activeBriefId={activeBriefId}
            onSelectBrief={setActiveBriefId}
            onSaveBrief={handleSaveBrief}
            onUpdateBrief={handleUpdateBrief}
            onDeleteBrief={handleDeleteBrief}
            onCardClick={setOpenCardId}
          />
        )}

        {openCard && (
          <CardModal
            card={openCard}
            folders={folders}
            tags={tags}
            onClose={() => setOpenCardId(null)}
            onEdit={() => { setEditCard(openCard); setOpenCardId(null) }}
            onNavigateToFolder={handleNavigateToFolder}
            onTogglePin={() => handleTogglePin(openCard.id)}
          />
        )}

        {isOwner && editCard && (
          <CardEditor
            card={editCard.isNew ? null : editCard}
            folders={folders}
            tags={tags}
            onClose={() => setEditCard(null)}
            onSave={handleSave}
            onDelete={editCard.isNew ? null : () => handleDelete(editCard.id)}
          />
        )}

        {!import.meta.env.PROD && showAuth && (
          <AuthModal
            onAuth={handleAuth}
            onClose={() => setShowAuth(false)}
          />
        )}

        <Footer
          onAuthTrigger={import.meta.env.PROD ? undefined : () => setShowAuth(true)}
          onLogout={handleLogout}
        />
      </div>
    </OwnerContext.Provider>
  )
}
