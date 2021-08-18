import React from 'react';
import styled from 'styled-components';

const Background=styled.div`
background-color:rgb(57,73,88);
height:150px;
padding: 0%;
font-family: 'Space Grotesk', sans-serif;
`
const Title=styled.h2`
color:white;
font-weight:bold;
text-align:center;
padding:2%
`
 
const Button=styled.button`
background-color:rgb(218,121,67);
padding:1%;
border: none;
color:white;
`
const Center=styled.div`
display: flex;
justify-content: center;`

function History() {
    return (

        <Background>
            <Title> OVER 20 YEARS OF IMPACT IN THE WESTSIDE OF ATLANTA</Title>
            <Center>
                <Button>LEARN ABOUT OUR HISTORY</Button>
            </Center>

        </Background>

    )
}

export default History