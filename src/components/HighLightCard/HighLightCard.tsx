import React from "react";
import {
  Container,
  CardHeader,
  Title,
  Icon,
  CardFooter,
  Amount,
  Description,
} from "./styles";

interface HighLightProps {
  title: String
  icon_name: String
  amount: String
  description: String
}
function HighLightCard({
  title,
  icon_name,
  amount,
  description,
}: HighLightProps) {
  return (
    <Container>
      <CardHeader>
        <Title>{title}</Title>
        <Icon name={icon_name} />
      </CardHeader>
      <CardFooter>
        <Amount>{amount}</Amount>
        <Description>{description}</Description>
      </CardFooter>
    </Container>
  );
}

export default HighLightCard;
