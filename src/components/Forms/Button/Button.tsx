import React from 'react'
import { ButtonStyled, Title } from './styles'
import { TouchableOpacityProps } from 'react-native'

interface Props extends TouchableOpacityProps {
  title: string
}

function Button({ title, ...rest }: Props) {
  return (
    <ButtonStyled {...rest} >
      <Title>{title}</Title>
    </ButtonStyled>
  )
}

export default Button