import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 18px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
export const Category = styled.TouchableOpacity<{ isActive: boolean }>`
  width: 100%;
  padding: ${RFValue(15)}px;
  flex-direction: row;
  align-items: center;

  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.secundary_light : theme.colors.background};
`;
export const Icon = styled(Feather)`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  /* color: ${({ theme }) => theme.colors.shape}; */
  margin-right: 16px;
`;
export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  /* color: ${({ theme }) => theme.colors.shape}; */
`;

export const Separator = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.text};
  width: 100%;
`;
export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
