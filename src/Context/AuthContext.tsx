import React, { ReactNode } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = React.createContext({});


export const AuthProvider = ({ children }: AuthProviderProps) => {

  const value = {

  }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}

