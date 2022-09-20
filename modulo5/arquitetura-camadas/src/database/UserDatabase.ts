import { User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "arq_users"

    getUserByEmail = async (email: string): Promise<any> => {
        try {
            const result = await BaseDatabase.connection()
                .select('*')
                .from(UserDatabase.TABLE_USERS)
                .where({ email })

            return result[0] && User.toUserModel(result[0])
            
        } catch (error: any) {
            console.log(error)
            throw new Error(error.sqlMessage || error.message)
        }
    }
}