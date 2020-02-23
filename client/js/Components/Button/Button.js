import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './styles'

const Button = ({children}) => {
  return (
    <TouchableOpacity
      style={styles.button1}
      onPress={() => {
        alert('Button pressed')
      }}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button
