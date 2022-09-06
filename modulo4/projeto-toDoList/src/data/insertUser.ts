import connection from "../connection";

export default async function insertUser(
    id:string,
    name:string,
    nickname:string,
    email:string
){
    await connection.insert({
        id,
        name, 
        nickname, 
        email}).into('toDoListUser')
}