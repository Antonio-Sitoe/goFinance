import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.shape};
  padding: 17px 24px;
  border-radius: 5px;
  margin-bottom: 16px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const Amount = styled.Text<{ type: "positive" | "negative" }>`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 2px;
  color: ${({ theme, type }) =>
    type === "positive" ? theme.colors.green : theme.colors.attention};
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
