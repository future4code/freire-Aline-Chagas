
// 3. **Informações do próprio perfil**

//     A partir do token de autenticação fornecido no login, 
//     o usuário deve ser capaz de ver as suas informações não sensíveis salvas no banco (id e email)

// **Método:** GET
// **Path:** `/user/profile`
// **Entradas:**

// Headers

// ```
// Authorization: "token de autenticação"
// ```

// **Saídas**

// Body

// ```json
// {
// 	"id": "id do usuário",
// 	"name": "Alice",
// 	"email": "alice@lbn.com"
// }
// ```