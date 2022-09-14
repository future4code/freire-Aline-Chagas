import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types"

export class Autheticator {

        public generateToken =  (payload:AuthenticationData)=>{
            const token = jwt.sign(payload,
                process.env.JWT_KEY as string,
                {expiresIn: process.env.EXPIRES_IN}
                )
                return token 
        }

        public getTokenData= (token:string):AuthenticationData =>{
                const tokenData = 
                jwt.verify(
                    token,
                    process.env.JWT_KEY as string) as AuthenticationData
                return tokenData 
                   }
            
        }

