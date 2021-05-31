import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import hotel3 from './hotel3.jpg';


const Styles = styled.div ` 
.jumbo {
    background: url(${hotel3}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 1000px;
    position: relative;
    z-index: -2;
}
.overlay {
    background-color: #000;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}

`;

export const Layout = (props) => (
    <>
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
        <Container>
            {props.children}
        </Container>
        </Jumbo>
    
    </Styles>
    </>
    )

