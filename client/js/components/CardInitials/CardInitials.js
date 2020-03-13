import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import styles from './styles'

const getInitials = (children) => {
  const initials = children.charAt(0) + 
    children.charAt(children.indexOf(' ') + 1)
  return initials
}

const CardInitials = ({children, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.initialBox}>
      <Text style={styles.initialText}>{getInitials(children)}</Text>
    </View>
  </TouchableOpacity>
)

export default CardInitials
