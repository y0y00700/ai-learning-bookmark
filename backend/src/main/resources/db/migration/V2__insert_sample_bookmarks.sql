INSERT INTO bookmark (title, url, memo, created_at) VALUES
    ('Spring Boot Reference', 'https://docs.spring.io/spring-boot/', '공식 레퍼런스', now() - INTERVAL '3 days'),
    ('React 문서', 'https://react.dev/', NULL, now() - INTERVAL '2 days'),
    ('Claude Code Docs', 'https://code.claude.com/docs/en/overview', '과정 참고 문서', now() - INTERVAL '1 day');
