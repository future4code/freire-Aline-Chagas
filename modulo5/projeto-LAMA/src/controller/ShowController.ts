import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ICreateShowDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}
    
public createShow = async(req:Request, res:Response) =>{
    try {
        const input:ICreateShowDTO = {
            band:req.body.band,
            token: req.headers.authorization as string,
            starts_at: req.body.starts_at
        }

        const response = await this.showBusiness.createShow(input)
        res.status(201).send(response)

    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
}
}