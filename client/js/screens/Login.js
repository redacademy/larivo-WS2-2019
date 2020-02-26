import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import Larivo_logo from '../../assets/icons/login/icon-larivo_logo.svg'
import Circle from '../../assets/icons/login/circle.svg'
import Circle_O from '../../assets/icons/login/circle-o.svg'
import LoginScrollViews from '../components/LoginScrollViews'


const styles = {
  container: {
    backgroundColor: '#03DAC4',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  slidesContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: 240,
  },
  logo: {
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: { width: 2, height: 2 },
    shadowRadiusa: 7,
  },
  headline: {
    fontSize: 32,
    marginTop: 25,
  },
  bodyText: {
    marginTop: 10,
    fontSize: 16,
  },
  swap_circles_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 120,
    marginTop: 60
  },
  buttons_container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 214,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: 214,
    borderRadius: 20.75,
    backgroundColor: '#F1FFFE',
    boxShadow: '2px 2px 5px 0 rgba(0,0,0,0.25)',
    marginTop: 25
  },
  text: {
    fontSize: 16,
    color: '#13443C',
    fontWeight: '300',
  },
  login: {
    fontSize: 16,
    color: '#13443C',
    fontWeight: '600',
    textDecorationLine: 'underline'
  }
}

const Login = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.slidesContainer}>
          <LoginScrollViews />
            <View style={styles.buttons_container}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  alert('Continue As Guest')
                }}
              >
                <Text style={styles.text}>Continue As Guest</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  alert('Register')
                }}
              >
                <Text style={styles.text}>Register</Text>
              </TouchableOpacity>
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
