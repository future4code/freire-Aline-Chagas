import { Address } from "../types/typeAddress";
import { connection } from "./connection";

export default async function insertAdressDb(address: Address) {
  const { cep, logradouro, bairro, cidade, estado, complemento, numero } = address;
  const id_user: string = Date.now().toString();
 
 await connection("servicos_backend").insert({
    id_user,
    logradouro,
    bairro,
    cidade,
    estado,
    numero,
    complemento,
    cep
  });
  
}
