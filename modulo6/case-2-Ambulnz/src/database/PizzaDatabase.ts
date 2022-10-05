
import { IPizzaDB, IpizzaIngredientsDB, Pizza } from "../models/Pizza"
import { BaseDatabase } from "./BaseDatabase"


export class PizzaDatabase extends BaseDatabase {
    public static TABLE_PIZZAS = "Amb_Pizzas"
    public static TABLE_INGREDIENTS = "Amb_Ingredients"
    public static TABLE_PIZZAS_INGREDIENTS = "Amb_Pizzas_Ingredients"

    public toPizzaDBModel = (pizza:Pizza): IPizzaDB => {
        return {
            name: pizza.getName(),
            price: pizza.getPrice(),
   
        }
    }
    public getPizzas = async ():Promise<IPizzaDB[]> =>{
        const result: IPizzaDB[] = await BaseDatabase
        .connection(PizzaDatabase.TABLE_PIZZAS_INGREDIENTS)
        .select("ingredient_name")
        .where({pizza_name: pizzaName})

        return result.map(item =>item.ingredient_name)
    }

    // public getPizzas = async():Promise<IPizzaDB[]> =>{

    // }
 public getIngredients = async(pizzaName:string):Promise<string[]> =>{
    const result = await BaseDatabase
    .connection(PizzaDatabase.TABLE_PIZZAS_INGREDIENTS)
    .select()

    return result
 }
}