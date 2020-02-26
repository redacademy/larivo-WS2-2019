import React, {useState} from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import styles from './styles'

const Hashtag = ({children, disabled}) => {
  const [pressed, setPressed] = useState(false)

  const handlePress = () => setPressed(!pressed)

  {
    return disabled ? (
      <View style={styles.hashtagsBox}>
        <Text style={styles.hashtagsText}>#{children}</Text>
      </View>
    ) : (
      <TouchableOpacity onPress={handlePress}>
        <View
          style={
            pressed
              ? {backgroundColor: '#000'}
              : {backgroundColor: '#fff'}
          }
        >
          <Text style={pressed ? {color: '#fff'} : {color: '#000'}}>
            #{children}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}
export default Hashtag
