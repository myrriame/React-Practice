import React from 'react';
import styled from 'styled-components';
import Overlay from './Overlay'
const Frame=styled.iframe`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index:-1`

const HeadVideo=styled.div`
position: relative;
padding-bottom: 56.25%; /* 16:9 */
height: 0;
padding-top: 25px;
width: 300%; /* enlarge beyond browser width */
left: -100%; /* center */
`
const Wrapper=styled.div`
overflow: hidden;
max-width: 100%;
`

function Video() {
    return (
        <>
            <Wrapper>
                <HeadVideo>

                    <Overlay />

                    <Frame width="1200" height="500" src="https://www.youtube.com/embed/CUPrP65tW_M?version=3&autoplay=1&controls=0&autoplay=1&loop=1&rel=0&mute=1&vq=hd1080" title="YouTube video player" frameborder="0" loop="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />


                </HeadVideo>
            </Wrapper>
        </>
    )
}
export default Video