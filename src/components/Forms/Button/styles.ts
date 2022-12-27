import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ButtonStyled = styled.TouchableOpacity`
  border-radius: 5px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secundary};
`;
export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
  padding: 18px;
`;
