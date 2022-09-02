import { Request, Response } from "express";
import insertProduct from "../data/insertProduct";
import { Product, ProductData } from "../types/typeProducts";

export default async function createProduct(req:Request, res:Response){
try{
const {name, price,image_url}:Product = req.body

if(!name || !price || !image_url){
    throw new Error("todos os campos devem ser preenchidos")
}
const productData:ProductData ={
    id:Date.now().toString(),
    name,
    price,
    image_url
}
const result = await insertProduct(productData)
res.status(201).send(result)
}catch(error:any){

    res.status(500).send(error.message)
}
}
