import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import styles from './styles'

const screenWidth = Dimensions.get('window').width

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
