import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './styles'

const Button = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        alert('Button pressed')
      }}
    >
      <Text style={styles.text}>Button</Text>
    </TouchableOpacity>
  )
}

export default Button
