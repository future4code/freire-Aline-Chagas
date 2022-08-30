### Exercício 1
a) Foreign Key é uma chave que referencia a primary key de uma outra tabela, para que elas possam ter uma relação entre si.

b)CREATE TABLE Rating (
	id INT PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id INT,
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
2,
"bom filme",
8,
2
),
(
3,
"bem legal",
9,
3
),
(
3,
"gostei",
7,
4
);

c) o SQL informa que não pode alterar pois houve falha na Foreign Key;  já que o id não existe, ele não encontrou correspondência na outra tabela.

d)ALTER TABLE Movie DROP COLUMN rating;

e)o SQL informa que não pode excluir. 

### Exercício 2


### Exercício 3


### Exercício 4


### Exercício 5


### Exercício 6

	

