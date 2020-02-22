import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './styles'

const Button = () => {
  return (
    <TouchableOpacity
      style={styles.button1}
      onPress={() => {
        alert('Button pressed')
      }}
    >
      <Text style={styles.text}>Continue As Guest</Text>
    </TouchableOpacity>
  )
}

export default Button
