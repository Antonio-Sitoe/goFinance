import React from 'react'
import { Container, Title, Amount, Footer, Icon, CategoryName, Date, Category } from './style'

interface TransactionCardProps {
  type: "positive" | "negative"
  name: string
  amount: string
  category: {
    icon: string
    name: string
  }
  date: String
}

function TransactionCard({ name, amount, category, date, type }: TransactionCardProps) {
  return (
    <Container>
      <Title>{name}</Title>
      <Amount type={type}>
        {type === 'negative' && '- '}
        {amount}</Amount>
      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  )
}

export default TransactionCard