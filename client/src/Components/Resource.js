import React from 'react';
import styled from 'styled-components';

const Title=styled.h1` 
color:rgb(107,107,107);
font-weight:bold;
text-align:left;
padding:2%;
`
const Paragraph=styled.p`
color:rgb(107,107,107);
font-size:20px;
text-align:left;
font-weight: lighter;
display: inline-block;
    width: 50%;
    padding:2%`


const Button=styled.button`
background-color:rgb(218,121,67);
padding:1%;
border: none;
color:white;
`
const Left=styled.div`
padding:4px;
padding-left:8%;
display: flex;
align-items:center;
`

const Image=styled.img`
    width: 30%;
`

function Resource() {
    return (
        <>

            <Left>

                <Paragraph>
                    <Title>A Free Resource For You</Title>
                    In Atlanta’s Westside, in zip code 30314, decades of neglect and disinvestment have gradually taken their toll on this once-proud neighborhood. Here, one finds the state’s highest incidences of poverty, incarceration rates, and teen pregnancies. Here, crime is rampant, and prostitution and drug deals occur in an open- air market. Here, the majority of housing stock is abandoned or derelict, with boarded-up and burnt-out shells lining the streets. In 30314, the problems are pervasive, and the needs are enormous.
       <br></br><br></br>
                    In this Ebook, you will find practical ways to get involved and bring about lasting change.  Click the button below and enter your email address to receive instant access.

                   <br></br> <Button>DOWNLOAD EBOOK</Button>
                </Paragraph>


                <Image src="https://images.squarespace-cdn.com/content/v1/5ca4a3017eb88c46af458726/1555610773311-KTUB2TPUY5W743BU03JV/Cor-Ebook.png?format=750w"></Image>
            </Left>
        </>
    )
}

export default Resource