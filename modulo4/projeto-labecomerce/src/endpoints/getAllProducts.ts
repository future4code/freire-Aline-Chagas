import { Request, Response } from "express";
import selectAllProducts from "../data/selectAllProducts";

export default async function getAllProducts(req: Request, res: Response) {
    try{
      const allProducts = await selectAllProducts()  

      if(!allProducts?.length){
        throw new Error("não existem produtos cadastrados")
      }
      res.status(200).send(allProducts) 

    }catch(error:any){
     res.status(500).send(error.message)   
    }
}