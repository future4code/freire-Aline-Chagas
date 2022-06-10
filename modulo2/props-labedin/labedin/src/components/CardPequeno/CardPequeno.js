import React from 'react';
import styled from 'styled-components';

const Smallcard = styled.div`
  display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    `
;


const CardPeqImg = styled.img`
    width: 60px;
    margin-right: 10px;
    border-radius: 50%;
    ` 
    ;

const CardPeqH4= styled.h4`
    margin-bottom: 15px;
   
`
;

const CardPeqP= styled.p`
align-items: center;
;
`


function CardPequeno(props) {
    return (
        <Smallcard>
            <CardPeqImg src={props.imagem}/>
            
                <CardPeqH4>{ props.nome }</CardPeqH4>
                <CardPeqP>{ props.texto }</CardPeqP>
           
        </Smallcard>
    )
}

export default CardPequeno;