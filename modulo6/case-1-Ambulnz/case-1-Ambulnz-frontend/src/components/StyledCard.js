import styled from "styled-components"

export const ContainerLi = styled.li`
    border: 1px solid black;
    margin: 1em;
    border-radius:5%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3,
    .card-price {
        text-align: center;
    }
`
// export const CardImg = styled.img.attrs(props =>({
// src:imgPizza(props.Img)||pizzaDeCala,

// }))
// ;
// const imagRes=(src)=>{
//   switch (src) {
//           case "Bufala":
//             return pizza2;
//           case "Diavola":
//             return pizzaDeCala;
//           case "Margherita":
//             return pizza2;
//           case "Pizza Bianca":
//             return pizza2;
//           case "Romana":
//             return pizza2;

//           default:
//         }
// }

