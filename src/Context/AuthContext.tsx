import React, { ReactNode } from 'react'
import * as Google from 'expo-auth-session'
import Axios from 'axios'

const CLIENT_ID = process.env.CLIENT_ID;
const REDIRECT_URI = process.env.CLIENT_ID;


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
  user: User,
  SignInWithGoogle: () => Promise<void>
}

type AuthResponse = {
  params: {
    access_token: string
  }
  type: string
}

export const AuthContext = React.createContext({} as AuthContextData);


export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = React.useState({} as User)
  const options = {
    CLIENT_ID: CLIENT_ID,
    REDIRECT_URI: REDIRECT_URI,
    SCOPE: encodeURI('profile email'),
    RESPONSE_TYPE: "token"
  }
  const [isChangeSomething, setIsChangeSomething] = React.useState(false)


  async function getUserInformation(token: string) {
    const { data } = await Axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`)
    setUser({
      id: data.id,
      email: data.email,
      name: data.name,
      photo: data.picture
    })
  }

  async function SignInWithGoogle() {
    try {
      const {
        CLIENT_ID,
        REDIRECT_URI,
        SCOPE,
        RESPONSE_TYPE

      } = options
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
      const { type, params } = await Google.startAsync({ authUrl }) as AuthResponse;
      if (type === 'success') {
        await getUserInformation(params.access_token)
      }
    } catch (error) {
      console.log(error)
    } finally {

    }
  }



  const value = {
    user,
    SignInWithGoogle,
    isChangeSomething,
    setIsChangeSomething,
  }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}

