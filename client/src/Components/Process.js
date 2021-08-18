import React from 'react';
import styled from 'styled-components';

const Title=styled.h2`
color:rgb(107,107,107);
font-weight:bold;
text-align:center;
padding:4%
`
const Paragraph=styled.p`
color:rgb(107,107,107);
font-size:20px;
text-align:center;
padding-left: 11%;
padding-right: 11%;
font-weight: lighter;
`
 
const Images=styled.img`
width:80%`

const Bold=styled.span`
font-weight:bold`

const Comment=styled.p`
display:inline;
color:rgb(107,107,107);
text-align:center;
width:15%;
margin-left:5%`

const Wrapper=styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
`
const Button=styled.button`
background-color:rgb(218,121,67);
padding:1%;
border: none;
color:white;
margin:5%
`
const Center=styled.div`
display: flex;
justify-content: center;`

function Process() {
    return (
        <>
            <Title>Our Process</Title>
            <Paragraph>Our process takes place <Bold>under one roof</Bold> in the most dangerous zip code in Atlanta. The needs are great but when likeminded community members, organizations, and volunteers partner together we are able to see amazing things happen.</Paragraph>
            <Wrapper>
                <span><Images src="https://images.squarespace-cdn.com/content/v1/5ca4a3017eb88c46af458726/1555283130326-MZYDII8Z2K6LANDCD6ED/Crisis.png?format=500w"></Images>
                    <br></br> <Comment>Crime, disease, lack of opportunity.</Comment></span>
                <span><Images src="https://images.squarespace-cdn.com/content/v1/5ca4a3017eb88c46af458726/1555283050523-5LVIW8AR7F8NOPTOJBG6/Receive+Help.png?format=500w"></Images>
                    <br></br>  <Comment>Food, housing, emergency healthcare.</Comment></span>
                <span><Images src="https://images.squarespace-cdn.com/content/v1/5ca4a3017eb88c46af458726/1555282941428-S7FE45MRHGTZ78C05EO5/LearnSkills.png?format=500w"></Images>
                    <br></br>  <Comment>Education, job training, financial literacy.</Comment></span>
                <span><Images src="https://images.squarespace-cdn.com/content/v1/5ca4a3017eb88c46af458726/1555282827094-DU3HXW1DPHGMQ62GEL54/Thrive.png?format=500w"></Images>
                    <br></br>  <Comment>New jobs, stronger families, local opportunities.</Comment></span>

            </Wrapper>
            <Center>
                <Button>OUR PROGRAMS & ON-SITE PARTNERS</Button>
            </Center>
        </>
    )
}

export default Process