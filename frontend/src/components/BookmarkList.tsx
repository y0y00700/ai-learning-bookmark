import type { Bookmark } from '../api/bookmarks'

interface Props {
  bookmarks: Bookmark[]
}

export default function BookmarkList({ bookmarks }: Props) {
  return (
    <ul className="bookmark-list">
      {bookmarks.map((bookmark) => (
        <li key={bookmark.id} className="bookmark-item">
          <a href={bookmark.url} target="_blank" rel="noreferrer">
            {bookmark.title}
          </a>
          {bookmark.memo && <p className="bookmark-memo">{bookmark.memo}</p>}
        </li>
      ))}
    </ul>
  )
}
