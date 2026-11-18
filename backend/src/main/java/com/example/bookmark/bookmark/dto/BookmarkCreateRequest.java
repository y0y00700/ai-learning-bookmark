package com.example.bookmark.bookmark.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.hibernate.validator.constraints.URL;

public record BookmarkCreateRequest(
        @NotBlank @Size(max = 100) String title,
        @NotBlank @URL @Size(max = 2048) String url,
        @Size(max = 500) String memo
) {
}
