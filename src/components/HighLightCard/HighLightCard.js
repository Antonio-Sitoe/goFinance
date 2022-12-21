import React from "react";
import { Container, CardHeader, Title, Icon, CardFooter } from "./styles";

function HighLightCard() {
  return (
    <Container>
      <CardHeader>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </CardHeader>
      <CardFooter>
        <Amount>RS 17.400,00</Amount>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Description>
      </CardFooter>
    </Container>
  );
}

export default HighLightCard;
