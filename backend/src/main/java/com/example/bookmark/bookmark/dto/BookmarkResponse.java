package com.example.bookmark.bookmark.dto;

import com.example.bookmark.bookmark.Bookmark;

public record BookmarkResponse(
        Long id,
        String title,
        String url,
        String memo
) {

    public static BookmarkResponse from(Bookmark bookmark) {
        return new BookmarkResponse(bookmark.getId(), bookmark.getTitle(), bookmark.getUrl(), bookmark.getMemo());
    }
}
