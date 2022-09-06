import connection from "../connection";

export default async function selectTaskById(
    id:string
){
    const result = await connection.raw(` 
    SELECT tasks.*, nickname FROM toDoListTask AS tasks
    JOIN toDoListUser AS user
    ON author_id = user.id
    WHERE tasks.id = ${id};
    `)
    
    
    return result[0][0]
}

