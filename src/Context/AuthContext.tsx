import React, { ReactNode } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

interface User {
  id?: number
  name?: string
  email?: string
  photo?: string
}
interface AuthContextData {
  user: User
}

export const AuthContext = React.createContext({} as AuthContextData);


export const AuthProvider = ({ children }: AuthProviderProps) => {

  const value = {
    user: {
      name: "Antonio Sitoe",
    }
  }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}

