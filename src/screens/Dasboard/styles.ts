import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { IListItemProps } from ".";

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
  align-items: flex-start;
  padding-top: ${RFValue(62)}px;
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

export const LogoutButton = styled(BorderlessButton)``;

export const Power = styled(Feather)`
  color: ${({ theme }) => theme.colors.secundary};
  font-size: ${RFValue(24)}px;
`;

export const HighLightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 20 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(21)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(16)}px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TransactionsList = styled(
  FlatList as new () => FlatList<IListItemProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 16,
  },
})``;
