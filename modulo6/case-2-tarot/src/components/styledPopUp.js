import styled from "styled-components";

export const PopUpContainer =styled.div`
width: 300px;
    height: 80px;
    background: rgba(0, 0, 0, 0.5);
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
    background: white;
    width: 400px;
    min-height: 10px;
    padding:50px;
    img {
      size: 5%;
    }
    `