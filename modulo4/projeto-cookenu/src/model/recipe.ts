import { recipe } from "../types";

class Recipe{
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private author_id: string
     
        ){}
        getId(){
            return this.id
        }
        getTitle(){
            return this.title
        }
        getDescription(){
            return this.description
        }
      
        getAuthorId(){
            return this.author_id
        }
}
export default Recipe
