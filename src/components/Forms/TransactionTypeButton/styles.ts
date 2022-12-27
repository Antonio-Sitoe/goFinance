import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
  type: "down" | "up";
  isActive: boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: 16px;
  justify-content: center;

  ${({ isActive, type }) =>
    isActive &&
    type === "up" &&
    css`
      background: ${({ theme }) => theme.colors.successs_light};
      border: none;
    `}
  ${({ isActive, type }) =>
    isActive &&
    type === "down" &&
    css`
      background: ${({ theme }) => theme.colors.attention_light};
      border: none;
    `}
`;

export const Icon = styled(Feather)<{ type: "down" | "up" }>`
  margin-right: 12px;
  font-size: ${RFValue(24)}px;
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.green : theme.colors.attention};
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
