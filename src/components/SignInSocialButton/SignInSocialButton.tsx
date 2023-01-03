import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { Button, ImageContainer, Title } from './styles'

interface ISignInSocialButton extends TouchableOpacityProps {
  title: string,
  svg: React.FC<SvgProps>
}

export function SignInSocialButton({ svg: Svg, title, ...rest }: ISignInSocialButton) {
  return (
    <Button {...rest}>
      <ImageContainer>
        <Svg />
      </ImageContainer>
      <Title>{title}</Title>
    </Button>
  )
}
