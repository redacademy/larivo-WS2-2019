import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import styles from './styles'

const Hashtag = ({children}) => (
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

export default Hashtag
