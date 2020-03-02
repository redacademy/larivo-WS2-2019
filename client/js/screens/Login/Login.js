import React from 'react'
import styles from './styles'
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import LoginSlideContainer from '../../components/LoginSlideContainer'
import Button from '../../components/Button'

const Login = () => {
  return (
    <SafeAreaView>
      <View style={styles.login_container}>
        <View style={styles.login_slidesContainer}>
          <LoginSlideContainer />
          <View style={styles.login_buttons_container}>
            <Button theme="dark">Continue As Guest</Button>
            <Button theme="light">Register</Button>
          </View>
          <View style={{marginTop: 40}}>
            <Text style={styles.text}>Already have an account?</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                alert('Login')
              }}
            >
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login
