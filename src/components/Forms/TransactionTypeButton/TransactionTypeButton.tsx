import React from 'react'
import { Container, Icon, Title } from './styles'
import { TouchableOpacityProps } from 'react-native'

interface ITransactionTypeButtonProps extends TouchableOpacityProps {
  title: string,
  type: 'up' | 'down'
  isActive: boolean
}

const icons_type = {
  up: "arrow-up-circle",
  down: "arrow-down-circle"
}

function TransactionTypeButton({ type, title, isActive, ...rest }: ITransactionTypeButtonProps) {

  return (
    <Container {...rest} isActive={isActive} type={type}>
      <Icon name={icons_type[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  )
}

export default TransactionTypeButton