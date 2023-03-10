import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SignIn } from '../screens/SignIn/SignIn'
import { AppRoutes } from './app.routes'
import useAuth from '../hooks/useAuth'



function RoutesManagement() {
  const { user } = useAuth()
  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  )
}

export default RoutesManagement