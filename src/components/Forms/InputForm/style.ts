import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ContainerInputForm = styled.View`
  width: 100%;
`;
export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.attention};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-bottom: 7px;
`;
