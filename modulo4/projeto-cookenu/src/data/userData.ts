import user from "../model/user";
import { userRole } from "../types";
import { connectionDB } from "./connectionDB";


class UserData extends connectionDB{
private static tableName = "cookenu_users"

async signUp(user:user){
    await connectionDB.connection(UserData.tableName)
    .insert({id:user.getId(),
        name:user.getName(),
         email:user.getEmail(),
          password: user.getPassword(), 
          role:user.getRole()})

          return ("usuário cadastrado com sucesso! :)")

}

async loginUser(email:string){
    const result = await connectionDB.connection(UserData.tableName).where({email})
    return result[0]
}
async getUserById(id:string){
    const result = await connectionDB.connection(UserData.tableName)
    .select("*").where({id})
    return result[0]
}

}

export default UserData
