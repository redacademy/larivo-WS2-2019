import React from 'react'
import styles from './styles'
import {View, Text} from 'react-native'

const ListView = ({data}) => (
  <View style={styles.container}>
    {data.map(({title, content, id}) => (
      <View key={id}>
        <Text>{title}</Text>
        <Text>{content}</Text>
      </View>
    ))}
  </View>
)

export default ListView
