import React from "react";
import { TextInputProps } from "react-native";
import { ContainerInput } from "./style";

interface InputProps extends TextInputProps {
  active?: boolean;
}

function Input({ active = false, ...props }: InputProps) {
  return <ContainerInput active={active} {...props} />;
}

export default Input;
