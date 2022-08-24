### exercicio 1 
a) ALTER TABLE Actor DROP COLUMN salary;
este comando altera a tabela de atores, excluindo a coluna salary.

b)ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
este comando altera a tabela de atores, alterando genero para sexo para uma string de no máximo 6 caracteres.

c)ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
este comando altera a tabela de atores, alterando genero para genero como uma string de no máximo 255 caracteres 

d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


### exercicio 2 
a) UPDATE actor
SET name = "nome"
SET birth_date = "yyyy/mm/dd"
WHERE id = "003"

b)UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";

c)UPDATE Actor
SET name = "ator",
birth_date = "yyyy-mm-dd",
salary = 8000000,
gender = "female"
WHERE id ="005";

d)UPDATE Actor
set name = "Ator"
WHERE id ="200";
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
ele informa que não foi afetada nenhuma linha em nenhuma coluna. 

### exercicio 3 
a) DELETE FROM Actor WHERE name = "Tony Ramos"

b)DELETE FROM Actor
WHERE salary > 10000000 AND gender = "male"

### exercicio 4 
a) SELECT MAX(salary) FROM Actor;

b)SELECT MIN(salary) FROM Actor WHERE gender ="female";

c)SELECT COUNT(*) FROM Actor WHERE gender = "female";

d)SELECT SUM(salary) from Actor;


### exercicio 5 
a) a query especificou a quantidade de atores e atrizes conforme o gênero (male ou female)

b)SELECT id, name FROM Actor
WHERE gender = 'male'
ORDER BY name DESC;

c)SELECT id, name, salary FROM Actor
ORDER BY salary ASC;

d)SELECT name, salary FROM Actor ORDER BY salary DESC LIMIT 3; 

e)SELECT AVG(salary) FROM Actor WHERE gender = 'male';

### exercicio 6 
a)ALTER TABLE Movie 
ADD playing_limit_date DATE NOT NULL; 

b)ALTER TABLE  Movie CHANGE rating rating FLOAT; 

c) UPDATE Movie
 SET release_Date = "2022-08-21"
 WHERE id ="003";

 UPDATE Movie
 SET playing_limit_date = "2020-06-15"
 WHERE id ="002";

d)DELETE FROM Movie WHERE id = "001";
SELECT synopsis from Movie WHERE id = "001";
a query retorna '0 rows', pois o id informado não foi encontrado.

### exercicio 7 
a)SELECT Count(*) from Movie WHERE rating > 7.5;

b)SELECT AVG(rating) FROM Movie;

c)
d)
e)
f)
### exercicio 8 