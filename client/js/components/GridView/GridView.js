import React from 'react'
import styles from './styles'
import {View, Text} from 'react-native'
import {Card} from '../Card'

const GridView = ({data}) => (
  <View style={styles.container}>
    {data.map(({title, content, id}) => (
      <Card key={id}>
        <Text>{title}</Text>
        <Text>{content}</Text>
      </Card>
    ))}
  </View>
)

export default GridView
