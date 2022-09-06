import connection from "../connection";

export default async function insertTask(
  title: string,
  description: string,
  deadline: string,
  author_id: string
) {
  {
    const id:string = Date.now().toString()
    const newDeadline = new Date(deadline)
    const status = "TODO"
    
    await connection
      .insert({
        id,
        title,
        status,
        description,
        deadline:newDeadline,
        author_id,
      })
      .into("toDoListTask");
  }
}
