import React from 'react'
import {Text, View} from 'react-native'
import styles from './styles'

const Paragraph = ({children, ...props}) => (
  <Text style={styles.paragraph} {...props}>
    {children}
  </Text>
)

export default Paragraph
