import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './styles'

const Button = ({
  theme: buttonTheme,
  onPress,
  children,
  disabled,
}) => {
  let theme = {}
  if (buttonTheme == 'light') {
    theme.backgroundColor = '#F1FFFE'
    theme.color = '#1E6A62'
  }
  if (buttonTheme == 'dark') {
    theme.backgroundColor = '#1E6A62'
    theme.color = '#F1FFFE'
  }

  return disabled ? (
    <View style={styles(theme).disabledBtn}>
      <Text style={styles(theme).disabledText}>{children}</Text>
    </View>
  ) : (
    <>
      <TouchableOpacity
        style={styles(theme).button}
        onPress={onPress}
      >
        <Text style={styles(theme).text}>{children}</Text>
      </TouchableOpacity>
    </>
  )
}
export default Button
