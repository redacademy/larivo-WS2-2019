import React from 'react'
import {ApolloProvider} from '@apollo/react-hooks'
import {Navigation} from './navigation'
import {client, AuthContextProvider} from './context'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </ApolloProvider>
  )
}

export default App
