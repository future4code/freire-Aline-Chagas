
a) *Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*
r: sim, pois a id criada pelo UUID é uma combinação criptografada de letras e números

b) *A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.*

 - GenerateId.ts
 
-------------------------------------------------------

exercício 2
a) *Explique o código acima com as suas palavras.*
o código cria a conexão com o banco de dados do MySQL e insere na tabela de usuários id, password e email


b) *Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*
tables.sql

c) *Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.*
createUser.ts

----------------------------------------------------

exercicio 3
a) *O que a linha `as string` faz? Por que precisamos usar ela ali?*
ela transforma o dado recebido em string, precisamos pois o JWT utiliza letras e números para criar o token e criptografá-lo

b) *Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.*
generateToken.ts e types.ts

------------------------------------------------------

exercicio 4 
a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*

b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*

c) *Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais*





