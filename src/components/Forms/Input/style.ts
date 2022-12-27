import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ContainerInput = styled.TextInput`
  border-radius: 5px;
  width: 100%;
  height: 56px;
  padding: 18px 16px;
  margin-bottom: 8px;
  font-size: ${RFValue(14)}px;
  background: ${({ theme }) => theme.colors.shape};
  color: #252525;
  font-family: ${({ theme }) => theme.fonts.regular}; ;
`;
