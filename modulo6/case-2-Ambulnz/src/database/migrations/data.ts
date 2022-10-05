import { IPizzaDB, IIngredientsDB, IpizzaIngredientsDB } from "../../models/Pizza"


export const pizzasSeed: IPizzaDB[] = [
    {
      "name": "Margherita",
      "price": 5
     
    },

      {"name": "Bufala",
      "price": 6
      
    },

    {
      "name": "Romana",
      "price": 5
    },

    {
      "name": "Diavola",
      "price": 7.5
    },

    {
      "name": "Pizza Bianca",
      "price": 5
    }
  ]

 export const ingredientsSeed: IIngredientsDB[] = [
    {
        "name": "tomato"
    },
    {
        "name": "mozzarella"
    },
    {
        "name": "mozarella di bufala"
    },
    {
        "name": "anchovies"
    },
    {
        "name": "oregano"
    },
    {
        "name": "oil"
    {
        "name": "spicy salami"
    }
]
 

 export const pizzasIngredientsSeed: IpizzaIngredientsDB[] =[

  {
    "pizza_name": "Margherita",
    "ingredient_name":"tomato"
},
  {
    "pizza_name": "Margherita",
    "ingredient_name":"mozzarella"
},
  {
    "pizza_name": "Bufala",
    "ingredient_name":"mozzarella di bufala"
},
  {
    "pizza_name": "Bufala",
    "ingredient_name":"tomato"
},
 
]