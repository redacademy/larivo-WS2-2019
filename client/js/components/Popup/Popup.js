import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'

const Popup = ({text, show}) => {
  return show ? (
    <View style={styles.popup}>
      <Text style={styles.popupText}>{text}</Text>
    </View>
  ) : null
}
export default Popup
