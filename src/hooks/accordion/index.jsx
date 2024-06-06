import React, { useState } from "react";
import { Down, Up, Arrow } from "./src/svg"
import { AccotionButton, AccotionContainer, AccotionContent, AccotionImage, AccotionText, AccotionWrapper } from "./style";

export default function Accordion() {
  const [visible, setVisible] = useState(false);
  const handleAngle = visible === false ? Up : Down

  function handleAccordion() {
    setVisible(!visible);
  }

  return (
    <AccotionWrapper>
      <AccotionContainer>
        <AccotionText>What is an accordion component</AccotionText>
        <AccotionButton onClick={handleAccordion}>
          <AccotionImage sr={Arrow} />
        </AccotionButton>
      </AccotionContainer>
      {visible && (
        <AccotionContent>
          <AccotionText>An accordion menu is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them. It is one of many ways you can expose content to users in a progressive manner.</AccotionText>
        </AccotionContent>
      )}
    </AccotionWrapper>
  );
}
