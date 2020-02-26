import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native'
// import Larivo_logo from '../../../assets/icons/login/icon-larivo_logo.svg'

const screenWidth = Dimensions.get('window').width

const styles = {
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
    width: 240,
    textAlign: 'center',
    color: '#13443C'
  },
  scrollViewContainer: {
    width : screenWidth
  }
}

const LoginSlide = ({item}) => {

  let Logo = item.logo
  return (
    <>
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      width: screenWidth,
        }}>
        <Logo style={styles.logo} />
        <Text style={styles.headline}>{item.headline}</Text>
        <Text style={styles.bodyText}>
          {item.body}
        </Text>
      </View>
    </>
  )
}

export default LoginSlide
