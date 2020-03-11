import React, {useState} from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import styles from './styles'

const CardHashtag = ({children}) => {
  {
    return  (
        <Text style={styles.hashtagsText}>#{children}</Text>
    )
  }
}
export default CardHashtag
