import React from 'react';
import styled from 'styled-components';

const Stuff=styled.div`

transform: translate(-50%, -50%);
color: rgba(255, 255, 255);
position: absolute;
mix-blend-mode: overlay;
padding: 180px 0px;
text-align: center;
top: 55%;
left: 50%;`


const Button=styled.button`
background-color:rgb(218,121,67);
padding:1%;
border: none;
color:white;
`

const Center=styled.div`
display: flex;
justify-content: center;
`
function Overlay() {
    return (
        <>
            <Stuff>
                <h1>LIGHT. HOPE. TRANSFORMATION.</h1>
                <br></br> <p>City of Refuge is a faith-based environment that helps individuals and families transition out of crisis. </p>
                <br></br> <Center> <Button>WATCH VIDEO</Button></Center>
                <br></br>  <Center><Button>DONATE</Button></Center>

                <br></br><p>SCROLL</p><br></br><p>V</p>
            </Stuff>
        </>
    )
}

export default Overlay