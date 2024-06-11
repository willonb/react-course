import * as S from "./style"

export default function NavBar() {
    return (
        <S.Container>
          <S.Logo>Logo</S.Logo>
         <S.Nav>
         <S.Link>link 1</S.Link>
          <S.Link>link 2</S.Link>
          <S.Link>link 3</S.Link>
          <S.Link>link 4</S.Link>
          <S.ContainerButton>
            <S.Button>Button</S.Button>
            <S.Button bgColor="black">Button</S.Button>
          </S.ContainerButton>
         </S.Nav>
          
        </S.Container>
    )
}