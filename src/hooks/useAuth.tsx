import React from 'react'
import { AuthContext } from '../Context/AuthContext'

function useAuth() {
  const context = React.useContext(AuthContext)
  return context

}

export default useAuth