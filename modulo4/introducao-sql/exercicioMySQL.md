### Exercício 1

_a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query._
o comando VARCHAR (255) indica que a informação deve ser uma string com no máximo 255 caracteres, o comando DATE informa que a data recebida deve ser no formato dd/mm/yyyy, o comando PRIMARY KEY informa que cada item deve ter um id único.

_b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados._
o comando Show mostra as informações desejadas

_c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando `DESCRIBE Actor` e explique os resultados._
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

a)SELECT _ FROM Actor;
SELECT _ from Actor WHERE gender = "female";

b)SELECT * FROM Actor;
SELECT salary from Actor WHERE name = "Tony Ramos";

c)retorna "0 rows returned, pois não há nenhum ator na lista com o gênero definido como inválido.

d)SELECT * FROM Actor;
SELECT id, salary from Actor WHERE salary < 500000;

e)o erro é porque o campo nome está escrito em português, quando o correto é 'name'
corrigido:SELECT id, name from Actor WHERE id = "002"

### Exercício 4

a) a query está dizendo para selecionar atores da lista cujo nome inicie com a ou j e o salário seja superior a 300.000

b)SELECT * FROM Actor;
WHERE (name NOT LIKE "A%") AND salary > 350000;

c)SELECT * FROM Actor;
WHERE name LIKE "%g%" OR name LIKE "%G%";

d)SELECT * FROM Actor;
WHERE
(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;

### Exercício 5

a)CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL UNIQUE,
synopsis TEXT NOT NULL,
release_Date DATE NOT NULL,
rating INT NOT NULL
);
essa query cria uma tabela de filmes. o id é uma stting que pode receber até 255 caracteres, e é Primary key, ou seja, é uma id única para cada filme inserido na tabela. o título é quase igual ao id, com a diferença de que não pode receber um valor vazio. também é único. a sinopse é um texto que não pode receber valores vazios. a data de lançamento está no formato data dd/mm/yyyy e também não pode ficar sem valores. a avaliação é obrigatoriamente um número inteiro, que também não pode ficar vazio.

b)INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

c)INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

d)INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

### Exercício 6

a)SELECT * FROM Movie;
SELECT id, title, rating from Movie WHERE id = "002";

b)SELECT * FROM Movie;
SELECT id, title, synopsis, release_date, rating from Movie WHERE title = "Doce de mãe";

c)SELECT * FROM Movie;
SELECT id, title, synopsis FROM Movie WHERE rating > 7;
	
### Exercício 7
a)SELECT * FROM Movie
WHERE title LIKE "%vida%";

b)SELECT * FROM Movie
WHERE title LIKE "Doce" OR synopsis LIKE "ela";

c)SELECT * FROM Movie
WHERE release_date < "2022-05-04";  

d)SELECT * FROM Movie
WHERE release_date < "2022-05-04" AND 
      (title LIKE "%Doce%" OR
      synopsis LIKE "%Deus%") AND rating > 7;   
