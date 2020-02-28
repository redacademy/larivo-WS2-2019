import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const Button = (props) => {
  let theme = {}
  if (props.theme == "light") {
    theme.backgroundColor = "#F1FFFE"
    theme.color = '#1E6A62'
  }
  if (props.theme == "dark") {
    theme.backgroundColor = "#1E6A62"
    theme.color = '#F1FFFE'
  }

  return (
  <>
    <TouchableOpacity
      style={styles(theme).button }
      onPress={() => {
        alert(props.text)
      }}
    >
      <Text style={styles(theme).text}>{props.children}</Text>
    </TouchableOpacity>
  </>
)}
export default Button

