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
a)
b)
c)
d)
e)

### exercicio 5 

### exercicio 6 

### exercicio 7 

### exercicio 8 