CREATE TABLE "entries" (
    id SERIAL PRIMARY KEY,
    entry VARCHAR(100) NOT NULL,
    project_id VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    hours_id DECIMAL NOT NULL
);

CREATE TABLE "projects" (
    id SERIAL PRIMARY KEY,
    project_id INT REFERENCES entries,
    hours_id  INT REFERENCES entries
);
