import React from 'react'
import {View, Text, Image, Dimensions} from 'react-native'
import styles from './styles'
import ErrorMessage from '../../../assets/icons/network/error-message.svg'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const NetWorkError = () => (
  <View style={styles.container}>
    <ErrorMessage width={screenWidth} height={screenHeight / 2} />
    <Text style={styles.text}>
      Oh no, something went terribly wrong.
    </Text>
    <Text style={styles.text}>
      Please try closing and reopening the app.
    </Text>
  </View>
)

export default NetWorkError
