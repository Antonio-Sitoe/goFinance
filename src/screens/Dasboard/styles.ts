import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  // usando a biblioteca para nos dar uma medida nos dar uma medida
  border: 1px solid red;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding-left: 16px;
  padding-right: 44px;
  flex-direction: row;
  align-items: center;
`;
export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;
export const User = styled.View`
  margin-left: 17px;
`;
export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-weight: bold;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Power = styled(Feather)`
  color: ${({ theme }) => theme.colors.secundary};
  font-size: ${RFValue(24)}px; ;
`;
