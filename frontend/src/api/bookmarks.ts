export interface Bookmark {
  id: number
  title: string
  url: string
  memo: string | null
}

export interface BookmarkCreateRequest {
  title: string
  url: string
  memo?: string
}

const BASE_URL = '/api/bookmarks'

export async function fetchBookmarks(): Promise<Bookmark[]> {
  const res = await fetch(BASE_URL)
  if (!res.ok) {
    throw new Error(`북마크 목록을 불러오지 못했습니다 (${res.status})`)
  }
  return res.json()
}

export async function createBookmark(request: BookmarkCreateRequest): Promise<Bookmark> {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  })
  if (!res.ok) {
    throw new Error(`북마크를 저장하지 못했습니다 (${res.status})`)
  }
  return res.json()
}
