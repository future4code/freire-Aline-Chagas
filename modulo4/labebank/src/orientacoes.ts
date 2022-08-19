// ### Funcionalidades

// - **Criar Conta**
    
//     Um cliente pode criar uma conta no banco se tiver idade igual ou maior do que 18 anos. Ele deve informar: **nome**, **CPF** e **data de nascimento**. As contas devem guardar essas informações e uma propriedade para representar o **saldo** do usuário. Além disso devem ser guardados, também, todos os gastos do usuário num array de **extrato** (possuindo o **valor**, a **data** e uma **descrição**). Lembre-se de que todas as contas, ao serem criadas, começam com o saldo zerado. Não podem existir dois usuários diferentes com o mesmo CPF.
    
// - **Pegar Saldo**
    
//     O usuário deve conseguir verificar o saldo da sua conta, passando o seu nome e o seu CPF. 
    
// - **Adicionar saldo**
    
//     O usuário deve conseguir adicionar saldo à sua conta, passando seu nome, o CPF e o valor que desejar.
    
// - **Pagar Conta**
    
//     Esta funcionalidade é muito importante para os clientes. Eles podem pagar uma conta, se quiserem, passando: um valor, uma descrição e uma data de pagamento. Caso ele não informe a date, deve-se considerar que o pagamento é para ser feito no mesmo dia. Além disso, devemos nos atentar: ele não pode agendar um pagamento para um dia que já passou ou tentar pagar uma conta cujo valor seja maior do que o seu saldo.
    
// - **Transferência Interna**
    
//     A transferência entre contas é muito mais interessante ao banco do que aos clientes em si, porque, com esta funcionalidade, ela consegue influenciar seus clientes a convencerem conhecidos a migrarem para o banco. Para realizar esta transferência, o usuário deve informar o seu nome, o seu CPF, o nome do destinatário, o CPF do destinatário e o valor em si. Transferências não podem ser agendadas e devem respeitar o saldo do usuário remetente.
    

// ### Requisitos Mínimos

// O mínimo do projeto consiste nas funcionalidades de: Criar conta, pegar as contas e adicionar uma validação de idade. Para isto, estamos propondo um conjunto de etapas de desenvolvimento.

// 1. Crie um **tipo** para representar uma conta para o usuário
// 2. Crie um array global que armazene usuários na aplicação. Caso queira, pode iniciar este array com valores pré-definidos.
// 3. Crie mais um **tipo**: para representar as **transações** que serão salvas no extrato
// 4. Dentro da definição do usuário, crie um array que armazene as transações de um cliente.
// 5. Crie um endpoint que utilize o método `POST` da entidade `users` que será responsável por cadastrar um usuário em um array de usuários. Neste momento, não se preocupe, com as validações descritas nas funcionalidades.
// 6. Crie um método `GET` na entidade `users` função que será responsável por pegar todos os usuários existentes no array de usuários.
// 7. Adicione, uma validação no item 1 (Criar conta): o usuário deve possuir mais do que 18 anos para conseguir se cadastrar. Caso não possua, exiba uma mensagem de erro.

// ###