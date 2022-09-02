import { userData } from "../types/typeUser";
import { connection } from "./connection";

export default async function insertUser(
  insertUser: userData
): Promise<string> {
  const { id, name, password, email } = insertUser;

  await connection("labecommerce_users").insert({
    id,
    name,
    password,
    email,
  });
  return `O usuário ${name} cadastrado com sucesso`;
}
