CREATE TABLE bookmark (
    id         BIGSERIAL PRIMARY KEY,
    title      VARCHAR(100)  NOT NULL,
    url        VARCHAR(2048) NOT NULL,
    memo       VARCHAR(500),
    created_at TIMESTAMPTZ   NOT NULL DEFAULT now()
);
