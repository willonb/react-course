import { Galery } from "./pattern/composition";
import {GaleriaContainer} from "./styles"

export default function GaleriaComposition() {
  return (
    <GaleriaContainer>
      <h1>
        <TextoPrincinpal />
      </h1>
      <Galery.content />g
    </GaleriaContainer>
  )
}