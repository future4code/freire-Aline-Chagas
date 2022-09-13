exercicio 1 

a) *O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*
round é o número de "custos", vezes quea operação vai rodar para calcular o hash da senha. quanto maior o valor do round, mais lento será o processo e mais dempo demanda. o valor ideal é 10. 
salt é quem adiciona sequências aleatórias de números e senhas para encriptar os dados e deixá-los mais seguros

b) *Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.  ***** 
Hashmanager.ts

c) *Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*
HashManager.ts

--------------------------------------------
Exercicio 2
a) *Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*
o cadastro, pois enviará a senha criptografada para o banco, o que dificulta o ataque "rainbow tables". o melhor método para isso é o hash, pois sua encriptação é definitiva

b) *Faça a alteração do primeiro endpoint*

c) *Faça a alteração do segundo endpoint*

d) *No exercício de hoje, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*
sim, pois neste endpoint é preciso ser um administrador para acessar os dados do banco com o token fornecido.
------------------------------------------

exercicio 3
a) *Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*

b) *Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.*

c) *Altere o cadastro para receber o tipo do usuário e criar o token com essa informação. (Não esqueça de adicionar na função query para inserir agora o valor de role do usuário à coluna role no banco)*

d) *Altere o login para criar o token com o `role` do usuário*







