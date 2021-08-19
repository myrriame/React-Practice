import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Title=styled.h1` 
color:rgb(107,107,107);
font-weight:bold;
text-align:center;
padding:4%
`

const Wrapper=styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;

`
const Images=styled.img`
padding-top:15%;
padding-bottom:15%;
width:80%`

const Button=styled.button`
background-color:rgb(218,121,67);
padding:3%;
border: none;
color:white;
`

const Paragraph=styled.p`
color:rgb(107,107,107);
font-size:20px;
text-align:center;
padding-left: 11%;
padding-right: 11%;
font-weight: lighter;`

const Center=styled.div`
display: flex;
justify-content: center;
`

function Stories() {
    return (
        <>

            <Title>Stories of Transformation</Title>
            <Paragraph>At City of Refuge, we know that transformation only takes place in the context of hard work and loving relationships. Please take a moment and meet some of our heroes that have decided to impact their own lives and the lives around them by entering our campus.</Paragraph>
            <Wrapper>
                <Fade>
                    <span><Images src="https://images.squarespace-cdn.com/content/v1/5ca4a3017eb88c46af458726/1599077067680-8QS3SL1LP0LRYSXT9IBP/Tech+Student.png?format=750w"></Images>
                        <br></br> <Center><Button>MEET OUR TECH GRADS</Button></Center></span></Fade>
                <Fade>
                    <span><Images src="https://images.squarespace-cdn.com/content/v1/5ca4a3017eb88c46af458726/1599082494608-TZ70Q4ZNQX2XJRM2PQOY/Investor.png?format=750w"></Images>
                        <br></br>  <Center><Button>MEET MATT & TIIFFANY</Button></Center></span>
                </Fade>
                <Fade>
                    <span><Images src="https://images.squarespace-cdn.com/content/v1/5ca4a3017eb88c46af458726/1594958126251-TVS3QBS0QDXNTHEC2OKC/Meet+Kisha.png?format=750w"></Images>
                        <br></br> <Center> <Button>MEET KISHA</Button></Center></span>
                </Fade>
            </Wrapper>
        </>
    )

}

export default Stories