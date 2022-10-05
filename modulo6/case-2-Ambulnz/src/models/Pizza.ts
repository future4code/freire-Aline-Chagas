
export interface IPizzaDB {
    name: string,
    price:number
}

export interface IIngredientsDB {
    name: string
}

export interface IpizzaIngredientsDB {
    pizza_name: string,
    ingredient_name:string
}

export class Pizza {
    constructor(
        private name: string,
        private price: number,
        private ingredients: string[]
    ) {}

  
    public getName = () => {
        return this.name
    }

    public getPrice = () => {
        return this.price
    }

    public getIngredients = () => {
        return this.ingredients
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setPrice = (newPrice: number) => {
        this.price = newPrice
    }

    public setIngredients = (newIngredients: string[]) => {
        this.ingredients = newIngredients
    }

    public removeIngredient = (ingredientToRemove:string) =>{
        return this.ingredients.filter((ingredient)=>(ingredient !== ingredientToRemove))
    }
}

export interface IGetPizzasOutputDTO {
    message:string,
    pizzas:{
        name:string,
        price:number,
        ingredients:string[]
    }[]
}

