export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
   role:userRole
}

export type AuthenticationData ={
   id: string
   role:userRole
}

export enum userRole {
   NORMAL = "NORMAL",
   ADMIN = "ADMIN"
}