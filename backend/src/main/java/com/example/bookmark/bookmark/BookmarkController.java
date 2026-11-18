package com.example.bookmark.bookmark;

import com.example.bookmark.bookmark.dto.BookmarkCreateRequest;
import com.example.bookmark.bookmark.dto.BookmarkResponse;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/bookmarks")
public class BookmarkController {

    private final BookmarkService bookmarkService;

    public BookmarkController(BookmarkService bookmarkService) {
        this.bookmarkService = bookmarkService;
    }

    @GetMapping
    public List<BookmarkResponse> findAll() {
        return bookmarkService.findAll();
    }

    @PostMapping
    public ResponseEntity<BookmarkResponse> create(@Valid @RequestBody BookmarkCreateRequest request) {
        BookmarkResponse created = bookmarkService.create(request);
        return ResponseEntity.created(URI.create("/api/bookmarks/" + created.id())).body(created);
    }
}
