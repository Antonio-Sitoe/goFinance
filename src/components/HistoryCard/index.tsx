import React from 'react'
import { Amount, Container, Title } from './style'

interface HistoryCardProps {
  amount: string, color: string, title: string
}

export function HistoryCard({ amount, color, title }: HistoryCardProps) {

  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  )
}

