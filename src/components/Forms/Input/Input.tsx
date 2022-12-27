import React from 'react'
import { TextInputProps } from 'react-native'
import { ContainerInput } from './style'

type InputProps = TextInputProps;

function Input({ ...props }: InputProps) {
  return (
    <ContainerInput  {...props} />
  )
}

export default Input