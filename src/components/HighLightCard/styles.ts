import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
  type: "up" | "down" | "total";
}

export const Container = styled.View<TypeProps>`
  background: ${({ theme, type }) =>
    type === "total" && css`` ? theme.colors.successs : theme.colors.shape};
  padding: 18px 23px;
  padding-bottom: ${RFValue(42)}px;
  width: ${RFValue(320)}px;
  margin-right: 16px;
  border-radius: 5px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.title};
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${({ type }) =>
    type === "up" &&
    css`
      color: ${({ theme }) => theme.colors.green};
    `}
  ${({ type }) =>
    type === "down" &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}
  ${({ type }) =>
    type === "total" &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`;

export const CardFooter = styled.View`
  margin-top: ${RFValue(39)}px;
`;

export const Amount = styled.Text<TypeProps>`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.title};
`;
export const Description = styled.Text<TypeProps>`
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
