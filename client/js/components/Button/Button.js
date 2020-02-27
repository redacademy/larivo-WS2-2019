import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const Button = (props) => (
  <>
    <TouchableOpacity
      style={styles(props).button }
      onPress={() => {
        alert(props.text)
      }}
    >
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  </>
)
export default Button

