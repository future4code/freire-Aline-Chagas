import { Request, Response } from "express"
import insertAdressDb from "../data/insertAdressDb"
import { getFullAddress } from "../services/getFullAddress"


export const insertAdress = async (req: Request, res: Response) => {
   try{
    const cep = req.params.cep
    const numero =Number(req.params.numero)
    console.log(cep,numero)

   const address = await getFullAddress(cep,numero)
   console.log(address)
   if(!address||undefined){
    throw new Error('CEP inválido')
   }

   await insertAdressDb(address)
   res.status(200).send("endereço criado com sucesso")
}catch(error:any){
    res.status(500).send(error.message)
}
}