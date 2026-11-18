import { useEffect, useState } from 'react'
import { createBookmark, fetchBookmarks, type Bookmark, type BookmarkCreateRequest } from './api/bookmarks'
import BookmarkForm from './components/BookmarkForm'
import BookmarkList from './components/BookmarkList'

function App() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchBookmarks()
      .then(setBookmarks)
      .catch((e: Error) => setError(e.message))
  }, [])

  async function handleCreate(request: BookmarkCreateRequest) {
    try {
      const created = await createBookmark(request)
      setBookmarks((prev) => [...prev, created])
      setError(null)
    } catch (e) {
      setError((e as Error).message)
    }
  }

  return (
    <main className="container">
      <h1>북마크</h1>
      <BookmarkForm onSubmit={handleCreate} />
      {error && <p className="error">{error}</p>}
      <BookmarkList bookmarks={bookmarks} />
    </main>
  )
}

export default App
