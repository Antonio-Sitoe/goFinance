import React from 'react'
import { SignIn } from '../screens/SignIn/SignIn'
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator()

function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  )
}

export default AuthRoutes