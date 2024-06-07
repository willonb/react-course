import Relume from "./src/svg/Relume.svg"

import  * as S  from "./style"

export default function Drop (props) {


  return (
    <S.Container >

      {
        props.pages && ( props.pages > props.pages?.length == 0 )

        ?

        props.pages.map((pages, key) => {
          return (
            <S.Content key={key} >
            <S.ImageLogo src={Relume} />
            <S.ContentText >
              <S.TituloCard>{pages.title}</S.TituloCard>
              <S.TextCard>{pages.description}</S.TextCard>
            </S.ContentText>
          </S.Content>
            
          )
        })
        
        :

        <p>coloque aqui</p>
      }

</S.Container>
     
  )
}