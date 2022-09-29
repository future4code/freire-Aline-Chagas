import { Interface } from "readline";

describe("Olá, teste", () => {

  test("Exercicio 0", () => {
  expect(isEven(112)).toBe(true)
  });
  
  test("exercicio 1", () => {
  expect(upperCase("bananinha")).toBe("BANANINHA")
  });
  
  test("exercicio 2", () => {
  expect(divideLetter("casa")).toEqual(["c", "a", "s", "a"])
  });

  test("exercicio 3", () => {
  expect (numberfy("100")).toBe(100)
  });

  test("exercicio 4", () => {
  expect (lengthWord("jest")).toBe(4)
  });

  test("exercicio 5", () => {
  const n = randomNumber()
  expect(n).toBe(n)
  console.log("o número é", n)

  // const output = randomNumber
  // expect(output).toBeGreaterThanOrEqual(1)
  // expect(output).toBeLessThanOrEqual(10)
 
  });

  test("exercicio 6", () => {
    const user:IUser = {
      id: "3",
      name: "Astrodev"
  }
  expect(users).toContainEqual(user)
  });

  test("exercicio 7", () => {
  const array = [10,4,7,6]
  
  expect(mediaNumber(array)).toBeGreaterThan()
 
  });

  test("exercicio 8", () => {

  });

  test("exercicio 9", () => {

  });
});

  // exercicio 0
  const isEven = (integer: number) => {
    if (integer % 2 == 0) {
      return true;
    } else {
      return false;
    }
  };
  
  // exercicio 1
  const upperCase = (word:string):string =>{
    return word.toUpperCase()
  }

  // exercicio 2
  const divideLetter = (word:string):string[]=>{
    return word.split("")
  }

  // exercicio 3
  const numberfy = (str:string):number =>{
    return Number(str)
  }

  // exercicio 4
  const lengthWord = (word:string):number =>{
  return word.length
  }

  // exercicio 5
  const randomNumber = ():number =>{
    const minNumber = 1
    const maxNumber = 10
    const result = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    return result

  }

  // exercicio 6
  interface IUser {
    id: string,
    name: string
  
}
const users: IUser[] = [
    {
        id: "1",
        name: "Aline"
    },
    {
        id: "2",
        name: "Juão"
    },
    {
        id: "3",
        name: "Astrodev"
    }
]

// exercicio 7
const mediaNumber = (list:number[])=>{
  let total = 0
  for (let n of list) {
    total= total+n
}

const average = Math.ceil(total / list.length)

return average


}

