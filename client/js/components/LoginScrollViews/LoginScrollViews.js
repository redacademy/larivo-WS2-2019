import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import Larivo_logo from '../../../assets/icons/login/icon-larivo_logo.svg'
import Circle from '../../../assets/icons/login/circle.svg'
import Circle_O from '../../../assets/icons/login/circle-o.svg'


const styles = {
  
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
  
}

const LoginScrollViews = () => {
  return (
        <View style={styles.slidesContainer}>
          <Larivo_logo style={styles.logo} />
          <Text style={styles.headline}>Larivo</Text>
          <Text style={styles.bodyText}>
            A safe platform to share curated mental health stories and
            find mental health resources.
          </Text>
            <View style={styles.swap_circles_container}>
              <Circle style={styles.oval}></Circle>
              <Circle_O style={styles.oval}></Circle_O>
              <Circle_O style={styles.oval}></Circle_O>
              <Circle_O style={styles.oval}></Circle_O>
            </View>
          </View>
  )
}

export default LoginScrollViews
