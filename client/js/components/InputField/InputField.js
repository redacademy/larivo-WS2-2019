import React from 'react'
import {View, Text, TextInput} from 'react-native'
import styles from './styles'

const InputField = () => (
  <View style={styles.inputBox}>
    <TextInput style={styles.input} inlineImageLeft="search_icon" />
  </View>
)

export default InputField
