import React from 'react'
import {Text, SafeAreaView} from 'react-native'
import styles from './styles'

const StoryAuthor = ({children}) => (
  <Text style={styles.textAuthor}>{children}</Text>
)

export default StoryAuthor
