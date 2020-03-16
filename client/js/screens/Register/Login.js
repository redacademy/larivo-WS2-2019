import React from 'react'
import {Formik} from 'formik'
import {TextInput, View, SafeAreaView} from 'react-native'
import Button from '../../components/Button'
import styles from './styles'
import {useAuth} from '../../hooks'

const Login = ({navigation}) => {
  const {login, isLoggedIn} = useAuth()
  console.log(isLoggedIn)

  const handleLogin = variables => {
    login({variables})
  }

  return (
    <Formik
      onSubmit={handleLogin}
      initialValues={{email: '', password: ''}}
    >
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <SafeAreaView>
          <View>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              autoCapitalize={false}
              placeholder="Email"
            />
          </View>
          <View>
            <TextInput
              autoCapitalize={false}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
            />
            <Button onPress={handleSubmit}>Login</Button>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  )
}

export default Login
