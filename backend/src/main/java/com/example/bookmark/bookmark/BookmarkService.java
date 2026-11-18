package com.example.bookmark.bookmark;

import com.example.bookmark.bookmark.dto.BookmarkCreateRequest;
import com.example.bookmark.bookmark.dto.BookmarkResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class BookmarkService {

    private final BookmarkRepository bookmarkRepository;

    public BookmarkService(BookmarkRepository bookmarkRepository) {
        this.bookmarkRepository = bookmarkRepository;
    }

    public List<BookmarkResponse> findAll() {
        return bookmarkRepository.findAll().stream()
                .map(BookmarkResponse::from)
                .toList();
    }

    @Transactional
    public BookmarkResponse create(BookmarkCreateRequest request) {
        Bookmark bookmark = new Bookmark(request.title(), request.url(), request.memo());
        return BookmarkResponse.from(bookmarkRepository.save(bookmark));
    }
}
