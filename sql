CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    parent_id INT REFERENCES locations(id) ON DELETE CASCADE,
    level INT NOT NULL,
    -- Additional fields as needed
    UNIQUE (name, parent_id) -- Ensure unique names per parent
);
