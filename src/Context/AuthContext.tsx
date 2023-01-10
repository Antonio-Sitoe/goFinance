import React, { ReactNode } from 'react'
import * as Google from 'expo-auth-session'
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const CLIENT_ID = "990647836870-utggkfcivma65fms8msufkc55dhiie67.apps.googleusercontent.com";
const REDIRECT_URI = "https://auth.expo.io/@antonio-sitoe533/gofinances"
// const CLIENT_ID = process.env.CLIENT_ID;
// const REDIRECT_URI = process.env.CLIENT_ID;


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
  SignOut: () => Promise<void>
  userStorageLoading: boolean
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
  const [userStorageLoading, setUserStorageLoading] = React.useState(true)
  const options = {
    CLIENT_ID: CLIENT_ID,
    REDIRECT_URI: REDIRECT_URI,
    SCOPE: encodeURI('profile email'),
    RESPONSE_TYPE: "token"
  }
  const userStorageKey = '@gofinances:user'


  async function SignOut() {
    await AsyncStorage.removeItem(userStorageKey)
    setUser({} as User)
  }


  React.useEffect(() => {
    async function loadUserStorageData() {
      const userStorage = await AsyncStorage.getItem(userStorageKey)
      if (userStorage) {
        const user = JSON.parse(userStorage) as User
        setUser(user)
      }
      setUserStorageLoading(false)
    }
    loadUserStorageData()
  }, [])


  async function getUserInformation(token: string) {
    const { data } = await Axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`)
    const userData = {
      id: data.id,
      email: data.email,
      name: data.name,
      photo: data.picture
    }
    setUser(userData)
    await AsyncStorage.setItem(userStorageKey, JSON.stringify(userData));
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
    }
  }


  const value = {
    user,
    SignInWithGoogle,
    SignOut,
    userStorageLoading
  }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}

