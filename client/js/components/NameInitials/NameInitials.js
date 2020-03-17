import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import styles from './styles'
import {getInitials} from '../../utils'

const NameInitials = ({children, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.initialBox}>
      <Text style={styles.initialText}>{getInitials(children)}</Text>
    </View>
  </TouchableOpacity>
)

export default NameInitials
