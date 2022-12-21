import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.shape};
  padding: 18px 23px;
  padding-bottom: ${RFValue(42)}px;
  width: ${RFValue(320)}px;
  /* height: ${RFValue(200)}px; */
  margin-right: 16px;
  border-radius: 5px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.green};
`;

export const CardFooter = styled.View`
  margin-top: ${RFValue(39)}px;
`;

export const Amount = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  line-height: 30px;
  color: ${({ theme }) => theme.colors.title};
`;
export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
