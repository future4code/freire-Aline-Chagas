export type user = {
  id: string;
  name: string;
  email: string;
  password: string;
  role:userRole

};

export type AuthenticationData = {
  id:string,
  role:userRole
};

export enum userRole {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN" 
}

export type recipe = {
  id: string;
  title: string;
  description: string;
  created_at: string;
  author_id: string;
}
