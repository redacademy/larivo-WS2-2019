import React from 'react'
import {Text, View, SafeAreaView} from 'react-native'
import Larivo_logo from '../../assets/icons/login/icon-larivo_logo.svg'

const styles = {
  container: {
    backgroundColor: '#03DAC4',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  slidesContainer: {
    alignItems: 'center',
    marginTop: 114,
    margin: 68,
  },
  logo: {
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {width: 2, height: 2},
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
}

const Login = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.slidesContainer}>
          <Larivo_logo style={styles.logo} />
          <Text style={styles.headline}>Larivo</Text>
          <Text style={styles.bodyText}>
            A safe platform to share curated mental health stories and
            find mental health resources.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login
