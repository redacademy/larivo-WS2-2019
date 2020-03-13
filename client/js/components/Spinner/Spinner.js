import React from 'react'
import {ActivityIndicator, View} from 'react-native'
import styles from './styles'

const Spinner = () => (
  <View style={styles.spinner}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
)

export default Spinner
