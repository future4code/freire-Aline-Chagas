import { ShowDatabase } from "../database/ShowDatabase"
import { ParamsError } from "../errors/ParamsError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { ICreateShowDTO, Show } from "../models/Show"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}
 public createShow = async (input:ICreateShowDTO) => {
    const {band, token, starts_at} = input

    if(!band || !token) {
        throw new ParamsError()

    }
    if(typeof band !== "string"){
        throw new ParamsError()
    }

    if( band.length < 1){
        throw new Error("O campo deve conter pelo menos um caractere")
    }
    
    const payload = this.authenticator.getTokenPayload(token)

    if(!payload){
        throw new ParamsError()
    }

    if(payload.role !== USER_ROLES.ADMIN){
        throw new UnauthorizedError()
    }

    const id = this.idGenerator.generate()

    const show = new Show(id, band, starts_at)
    await this.showDatabase.createShow(show)
    const response = {
        message: "Show criado com sucesso"
    }
    return response
 }

 

 
}