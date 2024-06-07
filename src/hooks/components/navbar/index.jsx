import * as S from "./style"

export default function Navbar() {
    return (
        <S.Container>
          <S.Logo>Logo</S.Logo>
          <S.Nav>Link 1</S.Nav>
          <S.Nav>Link 2</S.Nav>
          <S.Nav>Link 3</S.Nav>
          <S.Nav>Link 4</S.Nav>
          <S.ContainerButton>Buttom</S.ContainerButton>
          <S.ContainerButton bgColor="black">Buttom</S.ContainerButton>
        </S.Container>
    )
}