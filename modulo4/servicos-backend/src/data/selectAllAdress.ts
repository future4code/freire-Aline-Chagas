import { Address } from "../types/typeAddress";
import { connection } from "./connection";

export default async function selecAllAdress() {

const result = await connection('aula_servicos_adress')
.select('*')
return result 
}