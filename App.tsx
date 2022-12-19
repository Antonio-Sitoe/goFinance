import { StatusBar } from "expo-status-bar";
import React from "react";
import Dashboard from "./src/screens/Dasboard";
import { ThemeProvider } from "styled-components/native";

import theme from "./src/global/styles/theme";
import { View } from "react-native";

export default function App() {
  return (
    <View>
      <ThemeProvider theme={theme}>
        <Dashboard />;
      </ThemeProvider>
    </View>
  );
}
