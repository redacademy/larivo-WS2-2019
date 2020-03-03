import React, {useState} from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import styles from './styles'

const Hashtag = ({children, disabled}) => {
  const [pressed, setPressed] = useState(false)
  const handlePress = () => setPressed(!pressed)

  {
    return disabled ? (
      <View style={styles.hashtagsBoxPressed}>
        <Text style={styles.hashtagsTextPressed}>#{children}</Text>
      </View>
    ) : (
      <TouchableOpacity onPress={handlePress}>
        <View
          style={
            pressed ? styles.hashtagsBox : styles.hashtagsBoxPressed
          }
        >
          <Text
            style={
              pressed
                ? styles.hashtagsText
                : styles.hashtagsTextPressed
            }
          >
            #{children}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}
export default Hashtag
