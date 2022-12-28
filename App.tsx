import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import Dashboard from "./src/screens/Dasboard";
import Register from './src/screens/Register/Register';

import theme from "./src/global/styles/theme";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { View, Text } from "react-native";

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
      <StatusBar />
      <Register />
    </ThemeProvider>
  );
}
