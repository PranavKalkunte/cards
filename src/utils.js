const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

export function formatDate(ts) {
  if (!ts) return ''
  const d = new Date(ts)
  return `${d.getDate()} ${MONTHS[d.getMonth()]}`
}

export function getCardFolderPath(folders, cardId, path = []) {
  for (const folder of folders) {
    const newPath = [...path, folder.name]
    if (folder.children.includes(cardId)) return newPath
    const subs = folder.children.filter(c => typeof c === 'object')
    const found = getCardFolderPath(subs, cardId, newPath)
    if (found) return found
  }
  return null
}

export function getCardFolderId(folders, cardId) {
  for (const folder of folders) {
    if (folder.children.includes(cardId)) return folder.id
    const subs = folder.children.filter(c => typeof c === 'object')
    const found = getCardFolderId(subs, cardId)
    if (found) return found
  }
  return null
}

export function getAllFolders(folders, path = []) {
  const result = []
  for (const folder of folders) {
    const newPath = [...path, folder.name]
    result.push({ id: folder.id, label: newPath.join(' / '), depth: path.length })
    const subs = folder.children.filter(c => typeof c === 'object')
    result.push(...getAllFolders(subs, newPath))
  }
  return result
}

export function getFolderById(folders, id) {
  for (const folder of folders) {
    if (folder.id === id) return folder
    const subs = folder.children.filter(c => typeof c === 'object')
    const found = getFolderById(subs, id)
    if (found) return found
  }
  return null
}

export function removeCardFromTree(folders, cardId) {
  return folders.map(folder => ({
    ...folder,
    children: folder.children
      .filter(c => c !== cardId)
      .map(c => typeof c === 'object' ? removeCardFromTree([c], cardId)[0] : c),
  }))
}

export function addCardToFolder(folders, folderId, cardId) {
  return folders.map(folder => {
    if (folder.id === folderId) {
      if (folder.children.includes(cardId)) return folder
      return { ...folder, children: [...folder.children, cardId] }
    }
    return {
      ...folder,
      children: folder.children.map(c =>
        typeof c === 'object' ? addCardToFolder([c], folderId, cardId)[0] : c
      ),
    }
  })
}

export function addFolderToTree(folders, parentId, newFolder) {
  if (!parentId) return [...folders, newFolder]
  return folders.map(folder => {
    if (folder.id === parentId) {
      return { ...folder, children: [...folder.children, newFolder] }
    }
    return {
      ...folder,
      children: folder.children.map(c =>
        typeof c === 'object' ? addFolderToTree([c], parentId, newFolder)[0] : c
      ),
    }
  })
}

export function renameFolderInTree(folders, id, name) {
  return folders.map(folder => {
    if (folder.id === id) return { ...folder, name }
    return {
      ...folder,
      children: folder.children.map(c =>
        typeof c === 'object' ? renameFolderInTree([c], id, name)[0] : c
      ),
    }
  })
}

export function deleteFolderFromTree(folders, id) {
  return folders
    .filter(f => f.id !== id)
    .map(folder => ({
      ...folder,
      children: folder.children
        .filter(c => typeof c !== 'object' || c.id !== id)
        .map(c => typeof c === 'object' ? deleteFolderFromTree([c], id)[0] : c),
    }))
}

