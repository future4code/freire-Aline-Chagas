// 2. **Login**
    
//     Basta informar o email e a senha corretamente que o usuário poderá se logar na aplicação. 
//     Os endpoints de login e cadastro devem retornar **um** **token.**

// - **Login**
    
//     **Método:** POST
//     **Path:** `/login`
    
//     **Entradas:**
    
//     Body
    
//     ```json
//     {
//     	"email": "alice@lbn.com",
//     	"password": "123456"
//     }
//     ```
    
//     **Saídas**
    
//     Body
    
//     ```json
//     {
//     	"access_token": "token de acesso"
//     }
//     ```
    
//     **Observações**:
    
//     - O seu código deve validar se os dois campos estão completos 
//     (ou seja se não foram enviados ou se não estão vazios) 
//     e retornar um erro caso não estejam válidos