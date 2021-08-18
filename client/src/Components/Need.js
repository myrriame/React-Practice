import React from 'react';
import styled from 'styled-components';


const Background=styled.div`
background-color:rgb(57,73,88);
height:105px;
padding: 0%;
color:white;
padding:9%
`
const Button=styled.button`
background-color:rgb(218,121,67);
padding:1%;
border: none;
color:white;
`

function Need() {
    return (
        <>
            <Background>
                <h1>Understanding the Need </h1><br></br>
                <p>City of Refuge is located in the middle of one of Atlanta’s most historic and struggling neighborhoods where nearly 40% of the residents live below the Federal Poverty Level.</p>

                <br></br><Button> VIEW STATISTICS</Button>
            </Background>
        </>
    )
}

export default Need