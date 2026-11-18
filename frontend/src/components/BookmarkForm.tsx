import { useState, type FormEvent } from 'react'
import type { BookmarkCreateRequest } from '../api/bookmarks'

interface Props {
  onSubmit: (request: BookmarkCreateRequest) => Promise<void>
}

export default function BookmarkForm({ onSubmit }: Props) {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [memo, setMemo] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await onSubmit({ title, url, memo: memo || undefined })
    setTitle('')
    setUrl('')
    setMemo('')
  }

  return (
    <form className="bookmark-form" onSubmit={handleSubmit}>
      <input placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} required />
      <input placeholder="메모 (선택)" value={memo} onChange={(e) => setMemo(e.target.value)} />
      <button type="submit">추가</button>
    </form>
  )
}
