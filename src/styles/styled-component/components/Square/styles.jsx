import styled from "styled-components";
import '@fontsource/roboto/300.css';

export const SquareContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 1px ${props => props.borderStyled ? props.borderStyled : "solid"} black;
width: 200px;
height: 200px;
`

export const SquarelINK = styled.a`
text-decoration: none;
font-size: 18px;
`



