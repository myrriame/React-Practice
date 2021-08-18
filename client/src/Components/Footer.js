import React from 'react';
import styled from 'styled-components';

const Background=styled.div`
background-color:rgb(57,73,88);
height:500px;
padding: 0%;
color:white;
`
const Links=styled.a`
color: white;
padding-top:2%;
padding-left: 2%;
display: inline-block;
  vertical-align: middle;
`

const Button=styled.button`
background-color:rgb(218,121,67);
padding:2%;
border: none;
color:white;
`
const Wrapper=styled.div`
padding:8%;
display: flex;
align-items:center;`

const Span=styled.span`
padding-left: 15%;`

const Image=styled.img`
width:70%;
`
const Input=styled.input`
height:30px;
margin:1%`

const Footers=styled.h5`
text-align:center;`
 
function Footer() {
    return (
        <>
            <Background>

                <Span>
                    <span><Links>Contact Us</Links></span>
                    <span><Links>J17 Fund</Links></span>
                    <span><Links>Book</Links></span>
                    <span><Links>FAQ</Links></span>
                    <span><Links>Financials</Links></span>
                    <span><Links>Media</Links></span>
                    <span><Links>Programs</Links></span>
                    <span><Links>Staff & Board</Links></span>
                </Span>
                <hr></hr>
                <Wrapper>
                    <span><Image src="https://images.squarespace-cdn.com/content/v1/5ca4a3017eb88c46af458726/1554295752110-702SFBWEU6HTLS4QX8A5/COR+LOGO.png?format=750w"></Image></span>
                    <span><h1>Stay Connected</h1><p>Sign up with your email address to receive news and updates.</p><Input></Input><Button>Sign Up</Button></span>
                </Wrapper>
                <Footers>
                    © 2021 City of Refuge, Inc. All Rights Reserved. Cloned by Myrriame :P</Footers>

            </Background>
        </>
    )
}

export default Footer