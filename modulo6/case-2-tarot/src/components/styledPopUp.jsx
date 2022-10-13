import styled from "styled-components";
import button from "../assets/VOLTAR.png"

export const PopUpContainer =styled.div`
width: 280px;
    height: 70px;
    position: fixed;
    top: 100px;
    left: 400px;
    z-index: 1000px;
    display: flex;
    /* justify-content: center;
    align-items: center; */
    text-align: center;
    `
    
    export const PopUpStyle = styled.div`
    position: absolute;
    background-color: #000000dd;
    width: 500px;
    min-height: 10px;
    padding:30px;
    border-radius: 30px;
    img {
    margin:5px;
    width: 120px;
    height: 70%;
    }
    .modal{
       display: flex;
       
       p{ 
    color:white;  
    height: 250px;
       }
       
      }
      h2{
        color: #fff;
      }
      button{
        background: none;
        border: none;
        cursor: pointer;
    }
    `
  