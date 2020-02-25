import React from 'react'
import {Text, SafeAreaView, View} from 'react-native'
import styles from './styles'

const StoryTitles = ({children}) => (
  <SafeAreaView>
    <Text style={styles.textTitle}>{children}</Text>
  </SafeAreaView>
)

export default StoryTitles
