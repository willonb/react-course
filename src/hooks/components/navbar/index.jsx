import { useState } from "react"
import * as S from "./style"
import {Link} from "react-router-dom"

export default function NavBar() {
    
  const [open, setOpen] = useState(true)
  
        const listPages = [
          {
            title: "Page one",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          },
          {
            title: "Page one",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          },
          {
            title: "Page one",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          },
          {
            title: "Page one",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          },
        ]
  

  return (
        <S.Container>
          <S.Logo>Logo</S.Logo>
         <S.Nav>
         <S.Link>
           <Link to="/pagina1">Page1</Link>
         
         </S.Link>
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