import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const { Navigator, Screen } = createBottomTabNavigator();

import Register from '../screens/Register/Register';
import Dashboard from '../screens/Dasboard';
import { useTheme } from 'styled-components/native';


export const AppRoutes = () => {
  const theme = useTheme();


  return (
    <Navigator screenOptions={{
      tabBarActiveTintColor: theme.colors.secundary,
      tabBarInactiveTintColor: theme.colors.text,
      headerShown: false,
      tabBarLabelPosition: "beside-icon",
      tabBarStyle: {
        height: 88
      }
    }} >

      <Screen
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons size={size} color={color} name="format-list-bulleted" />
        }}
        component={Dashboard} name="Listagem" />
      <Screen
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons size={size} color={color} name="attach-money" />
        }}
        component={Register} name="Cadastrar" />
      <Screen
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons size={size} color={color} name="pie-chart" />
        }}
        component={Register} name="Resumo" />
    </Navigator>
  )
}