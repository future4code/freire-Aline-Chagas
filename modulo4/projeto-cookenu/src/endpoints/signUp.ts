// - **Signup**
    
//     **Método:** POST
//     **Path:** `/signup`
    
//     **Entradas:**
    
//     Body
    
//     ```json
//     {
//     	"name": "Alice",
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
    
//     - O seu código deve validar se os três campos estão completos 
//     (ou seja se não foram enviados ou se não estão vazios) 
//     e retornar um erro caso não estejam válidos
//     - O seu código deve gerar o id do usuário