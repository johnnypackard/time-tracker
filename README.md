# time-tracker

# PostgreSQL queries to create tables
CREATE TABLE "projects" (
	id SERIAL PRIMARY KEY,
	project VARCHAR(100) NOT NULL,
	totalHours DECIMAL NOT NULL
);

CREATE TABLE "history" (
	id SERIAL PRIMARY KEY,
	entry VARCHAR(100) NOT NULL,
	project VARCHAR(100) NOT NULL,
	date DATE NOT NULL,
	hours DECIMAL NOT NULL
);