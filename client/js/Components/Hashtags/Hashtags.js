import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import styles from './styles'

const Hashtags = ({children}) => (
  <TouchableOpacity
    onPress={() => {
      alert('hashtag pressed')
    }}
  >
    <View style={styles.hashtagsBox}>
      <Text style={styles.hashtagsText}>#{children}</Text>
    </View>
  </TouchableOpacity>
)

export default Hashtags
