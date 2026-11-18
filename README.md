# 북마크 관리

북마크를 저장하고 목록으로 보는 웹 앱입니다.

- `backend/`: Spring Boot 3.5, Java 21, Gradle (Kotlin DSL), PostgreSQL, Flyway
- `frontend/`: React + TypeScript (Vite)

## 실행에 필요한 것

- JDK 21
- Docker Desktop (PostgreSQL 컨테이너를 띄웁니다)
- Node.js 20.19 이상 또는 22.12 이상

## 실행

```bash
# 터미널 1: 백엔드 (http://localhost:8080)
cd backend
./gradlew bootRun        # Windows: gradlew.bat bootRun

# 터미널 2: 프론트엔드 (http://localhost:5173)
cd frontend
npm install
npm run dev
```

`bootRun`을 실행하면 `backend/compose.yaml`의 PostgreSQL 컨테이너가 자동으로 뜹니다. 프론트엔드의 `/api` 요청은 Vite 개발 서버가 백엔드로 넘깁니다.

## 테스트

```bash
cd backend
./gradlew test           # Docker 실행 중이어야 합니다 (Testcontainers)
```

## API

| 메서드 | 경로 | 설명 |
| --- | --- | --- |
| GET | `/api/bookmarks` | 북마크 목록 |
| POST | `/api/bookmarks` | 북마크 추가 (`title`, `url`, `memo`) |
