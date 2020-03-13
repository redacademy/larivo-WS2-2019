import React, {useState, createContext} from 'react'

const AuthContext = createContext({user: null, setUser: null})

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState()

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
