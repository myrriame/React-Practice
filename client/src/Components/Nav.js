import React from 'react';
import styled from 'styled-components';

const Background=styled.div`
background-color:rgb(57,73,88);
height:105px;
padding: 0%;
`
const Logo=styled.img`
width:21%;
margin-top:1%;
margin-left:7%;
display: inline-block;
  vertical-align: middle;`

const Links=styled.a`
color: white;
padding-left: 2%;
display: inline-block;
  vertical-align: middle;
`

const Span=styled.span`
padding-left: 15%;`

function NavBar() {
    return (

        <Background>
            <span><Logo src="https://images.squarespace-cdn.com/content/v1/5ca4a3017eb88c46af458726/1554293996923-T15CTGYFEIMKPH97NF71/COR+LOGO.png?format=1500w"></Logo>
                <Span>
                    <span><Links>Get Involved</Links></span>
                    <span><Links>Tech Academy</Links></span>
                    <span><Links>Job Training</Links></span>
                    <span><Links>Staff & Board</Links></span>
                    <span><Links>Join City Lights</Links></span>
                    <span><Links>Donate</Links></span>
                </Span>
            </span>

        </Background>

    )
}

export default NavBar