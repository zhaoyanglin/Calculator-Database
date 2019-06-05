CREATE TABLE "calculator"
(
    "id" SERIAL PRIMARY KEY,
    "first_value" FLOAT not null,
    "second_value" FLOAT not null,
    "result" FLOAT not null,
    "operation" VARCHAR(1)
);
