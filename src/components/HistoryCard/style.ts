import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View<{ color: string }>`
  width: 100%;
  background: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 13px 24px;
  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({ color }) => color};
  margin-bottom: 8px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const Amount = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-top: 2px;
`;
export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 19px;
  justify-content: space-between;
`;
export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 17px;
`;

export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;
export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;
