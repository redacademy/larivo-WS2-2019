import {useContext, useEffect, useState} from 'react'
import {useMutation} from '@apollo/react-hooks'
import {AuthContext, SIGN_UP, LOG_IN} from '../context'
import {useAsyncStorage} from '../hooks'

const useAuth = () => {
  const {user, setUser} = useContext(AuthContext)
  const [signup, {data: signupData}] = useMutation(SIGN_UP)
  const [login, {data: loginData}] = useMutation(LOG_IN)
  const [localUser, setLocalUser] = useAsyncStorage('larivo-user')

  const logout = () => {
    setUser(null)
    setLocalUser(null)
  }

  useEffect(() => {
    if (!user && (signupData || loginData)) {
      if (loginData) {
        setUser(loginData.login)
        setLocalUser(loginData.login)
      } else if (signupData) {
        setUser(signupData.signup)
        setLocalUser(signupData.signup)
      }
    }
  }, [user, setUser, signupData, loginData, setLocalUser])

  return {
    user: user || localUser,
    isLoggedIn: !!localUser || !!loginData || !!signupData,
    signup,
    logout,
    login,
  }
}

export default useAuth
