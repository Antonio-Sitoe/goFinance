import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  margin-bottom: 16px;
  height: ${RFValue(56)}px;
  align-items: center;
  flex-direction: row;
`;
export const ImageContainer = styled.View`
  padding: ${RFValue(16)}px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.background};
  border-right-width: 1px;
`;

export const Title = styled.Text`
  text-align: center;
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;

  font-family: ${({ theme }) => theme.fonts.medium};
`;
