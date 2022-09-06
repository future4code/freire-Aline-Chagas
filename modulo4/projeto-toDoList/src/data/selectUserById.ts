import connection from "../connection";

export default async function selectUserById(
    id:string
){
    const result = await connection('toDoListUser')
    .select("*")
    .where({id})
    
    return result[0]
}