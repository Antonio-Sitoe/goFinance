import React from 'react'
import { Container, Category, Icon } from './styles'

interface ICategorySelect {
  title: string
  onPress: () => void
}

function CategorySelectButton({ title, onPress }: ICategorySelect) {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  )
}

export default CategorySelectButton