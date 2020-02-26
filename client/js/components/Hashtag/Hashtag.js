import React, {useState} from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'
import styles from './styles'

const Hashtag = ({children}) => {
  return (
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
}
export default Hashtag
