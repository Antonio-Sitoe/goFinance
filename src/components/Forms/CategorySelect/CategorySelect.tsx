import React from 'react'
import { Container, Category, Icon } from './styles'

interface ICategorySelect {
  title: string
}

function CategorySelect({ title }: ICategorySelect) {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  )
}

export default CategorySelect