import React from "react";
import { StatusBar } from "expo-status-bar";
import Dashboard from "./src/screens/Dasboard";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";

import { View, Text } from "react-native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <Dashboard />
    </ThemeProvider>
  );
}
