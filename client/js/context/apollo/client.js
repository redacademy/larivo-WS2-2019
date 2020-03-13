import {ApolloClient} from 'apollo-client'
import {Platform} from 'react-native'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {createHttpLink} from 'apollo-link-http'
import {setContext} from 'apollo-link-context'
import AsyncStorage from '@react-native-community/async-storage'

const httpLink = createHttpLink({
  uri: `http://${
    Platform.OS === 'ios' ? 'localhost:4000' : '10.0.0.184:4000'
  }`,
})

const authLink = setContext(async (_, {headers}) => {
  let token

  try {
    const val = await AsyncStorage.getItem('larivo-user')
    token = JSON.parse(val).token
  } catch (e) {}

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearger ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client
