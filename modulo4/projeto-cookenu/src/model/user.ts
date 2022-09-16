import { userRole } from "../types";

class User{
    constructor(
        private id:string,
        private email:string,
        private name:string,
        private password:string,
        private role: userRole
        ){}
        getId(){
            return this.id
        }
        getEmail(){
            return this.email
        }
        getPassword(){
            return this.password
        }
        getRole(){
            return this.role
        }
        getName(){
            return this.name
        }
}
export default User