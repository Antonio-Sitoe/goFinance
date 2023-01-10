import 'intl'
import 'intl/locale-data/jsonp/pt-MZ'

import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { View, Text } from "react-native";
import { AuthProvider } from './src/Context/AuthContext';
import RoutesManagement from './src/routes/RoutesManagement';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' />
      <AuthProvider>
        <RoutesManagement />
      </AuthProvider>
    </ThemeProvider>
  );
}
