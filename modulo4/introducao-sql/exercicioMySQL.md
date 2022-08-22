### Exercício 1
*a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*
o comando VARCHAR (255) indica que a informação deve ser uma string com no máximo 255 caracteres, o comando DATE informa que a data recebida deve ser no formato dd/mm/yyyy, o comando PRIMARY KEY informa que cada item deve ter um id único.


*b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*
o comando Show mostra as informações desejadas 

*c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*
Neste exercício, o comando Describe retornou um erro, pois ele não possui as informações, ele só fornece a estrutura da requisição.


### Exercício 2
a)INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b)ele informa que o erro é devido ao fato de a idestar duplicada, como é uma Primary Key, só pode corresponder a um item. 

c)informa um erro pois foram passadas mais informações do que o exigido nos parametros. 
corrigido, seria: INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000
);

 d)informa que o campo 'name' não possui um valor. 
 corrigido: INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  "Nome do Ator",
  400000,
  "1949-04-18", 
  "male"
);

e)informa o erro 1292, pois a data não foi envolvida em "". 
corrigido: INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

f)INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Selton Mello",
  719333.33,
  "1972-12-30", 
  "male"
);

### Exercício 3
a)SELECT * FROM Actor;
SELECT * from Actor WHERE gender = "female";

b)SELECT * FROM Actor;
SELECT salary from Actor WHERE name = "Tony Ramos";

c)retorna "0 rows returned, pois não há nenhum ator na lista com o gênero definido como inválido.

d)SELECT * FROM Actor;
SELECT id, salary from Actor WHERE salary < 500000;

e)o erro é porque o campo nome está escrito em português, quando o correto é 'name'
corrigido:SELECT id, name from Actor WHERE id = "002"

### Exercício 4
a) a query está dizendo para selecionar atores da lista cujo nome inicie com a ou j e o salário seja superior a 300.000

b)SELECT * FROM Actor
WHERE (name  NOT LIKE "A%") AND salary > 350000;

c)

d)

### Exercício 5

### Exercício 6

### Exercício 7


