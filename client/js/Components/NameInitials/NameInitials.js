import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import styles from './styles'

const NameInitials = ({children}) => (
  <TouchableOpacity>
    <View style={styles.initialBox}>
      <Text style={styles.initialText}>{children}</Text>
    </View>
  </TouchableOpacity>
)

export default NameInitials
