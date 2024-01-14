CREATE DATABASE hc;

CREATE TABLE cursos
(
    id SERIAL PRIMARY KEY,
    nome VARCHAR [50],
    descricao VARCHAR [50]
);
INSERT INTO cursos (nome, descricao) VALUES ('Ciência da computação', 'Vespertino');
INSERT INTO cursos (nome, descricao) VALUES ('Geografia', 'Matutino');

-- SELECT * FROM cursos;