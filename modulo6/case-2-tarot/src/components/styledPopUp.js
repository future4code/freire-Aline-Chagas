import styled from "styled-components";

export const PopUpContainer =styled.div`
width: 300px;
    height: 70px;
    position: fixed;
    top: 250px;
    left: 250px;
    z-index: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    `
    
    export const PopUpStyle = styled.div`
    position: absolute;
    background-color: black;
    width: 600px;
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
    `
  