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
  type: "up" | "down" | 'total'
}
function HighLightCard({
  title,
  icon_name,
  amount,
  description,
  type
}: HighLightProps) {


  return (
    <Container type={type}>
      <CardHeader>
        <Title type={type}>{title}</Title>
        <Icon name={icon_name} type={type} />
      </CardHeader>
      <CardFooter>
        <Amount type={type}>{amount}</Amount>
        <Description type={type}>{description}</Description>
      </CardFooter>
    </Container>
  );
}

export default HighLightCard;
