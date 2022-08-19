type User = {
    id: number,
    name: string,
    age: number
    cpf: number,
    birth:string
}

type balance ={
    value:number,
    date:string,
    description:string
}

export const user: User[]=[
    {   id: 1,
        name: 'João',
        age: 33,
        cpf: 55528245808,
        birth:'01/01/1989'
        

    },
    {   id: 2,
        name: 'Clara',
        age: 30,
        cpf: 17528865809,
        birth:'10/07/1992'

    },
    {   id: 3,
        name: 'José',
        age: 60,
        cpf: 33528245877,
        birth:'14/04/1962'

    },
    {   id: 4,
        name: 'Ana Paula',
        age: 29,
        cpf: 22527845810,
        birth:'01/01/1993'

    }
]