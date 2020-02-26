import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import LoginSlideContainer from '../components/LoginSlideContainer'
import LoginButton from '../components/LoginButton'

const screenWidth = Dimensions.get('window').width

const styles = {
  container: {
    backgroundColor: '#03DAC4',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slidesContainer: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    marginTop: 20,
    width: '100%',
    padding: 10
  },
  buttons_container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 214,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    fontSize: 16,
    color: '#13443C',
    fontWeight: '600',
    textDecorationLine: 'underline'
  },
  text: {
    fontSize: 16,
    color: '#13443C',
    fontWeight: '300',
  }
}

const Login = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.slidesContainer}>
          <LoginSlideContainer />
          <View style={styles.buttons_container}>
            <LoginButton
              text="Continue As Guest"
            />
            <LoginButton
              text="Register"
            />
          </View>
          <View style={{ marginTop: 40 }}>
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
