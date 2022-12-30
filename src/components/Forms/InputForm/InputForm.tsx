import React from 'react'
import Input from '../Input/Input';
import { Control, Controller } from 'react-hook-form';
import { ContainerInputForm, Error } from './style'
import { TextInputProps } from 'react-native'

interface InputProps extends TextInputProps {
  control: Control
  name: string
  error: string
};

function InputForm({ control, error, name, ...props }: InputProps) {
  return (
    <ContainerInputForm>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => <Input onChangeText={onChange} value={value} {...props} />}
      />
      {error && <Error>{error}</Error>}
    </ContainerInputForm>
  )
}

export default InputForm