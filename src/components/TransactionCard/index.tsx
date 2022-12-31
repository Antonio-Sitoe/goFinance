import React from 'react'
import { categories } from '../../utils/category'
import { Container, Title, Amount, Footer, Icon, CategoryName, Date, Category } from './style'

interface TransactionCardProps {
  type: "positive" | "negative"
  name: string
  amount: string
  category: string
  date: String
}

function TransactionCard({ name, amount, category, date, type }: TransactionCardProps) {
  const [categoryFormated] = categories.filter(({ key }) => key === category);
  return (
    <Container>
      <Title>{name}</Title>
      <Amount type={type}>
        {type === 'negative' && '- '}
        {amount}</Amount>
      <Footer>
        <Category>
          <Icon name={categoryFormated.icon} />
          <CategoryName>{categoryFormated.name}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  )
}

export default TransactionCard