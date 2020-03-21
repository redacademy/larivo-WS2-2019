import React from 'react'
import {Text, View} from 'react-native'
import styles from './styles'

const StoryDate = ({children}) => (
  <View>
    <Text style={styles.storyDate}>{children}</Text>
  </View>
)

export default StoryDate
