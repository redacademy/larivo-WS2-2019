import React from 'react'
import {Text, View} from 'react-native'
import styles from './styles'

const Paragraph = ({children}) => (
  <Text style={styles.paragraph}>{children}</Text>
)

export default Paragraph
