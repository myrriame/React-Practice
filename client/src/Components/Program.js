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
 
function Program() {
    return (
        <>
            <Background>
                <h1>Our Programs</h1><br></br>
                <p>Our campus programs are a result of over two decades of experience in community development. Our programs are holistic and based on four key impact areas:  Health & Wellness, Housing, Vocational Training, and Youth Development.</p>

                <br></br><Button> VIEW PROGRAMS & ON-SITE PARTNERS</Button>
            </Background>
        </>
    )

}

export default Program