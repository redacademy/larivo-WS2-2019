import React from 'react'
import {Text, View} from 'react-native'
import styles from './styles'

const Hashtags = ({children}) => (
  <View style={styles.hashtagsBox}>
    <Text style={styles.hashtagsText}>#{children}</Text>
  </View>
)

export default Hashtags
