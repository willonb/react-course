import { SquareContainer, SquarelINK, } from "./styles";

export default function Square (props) {
  return (
    <SquareContainer boderStyles= {props.boderStyles}>
      <SquarelINK  href="https://styled-components.com/" target="_blank">
      {props.boderStyles ? props.boderStyles : "adicione a prop no Square"} 
      </SquarelINK>
    </SquareContainer>
  )
}

