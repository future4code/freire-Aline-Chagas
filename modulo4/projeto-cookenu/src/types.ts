export type user = {
  id: string;
  name: string;
  email: string;
  password: string;
  role:userRole

};

export type recipe = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  authorId: string;
};
export type AuthenticationData = {
  id: string;
  role:userRole

};
 
export enum userRole {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN" 
}