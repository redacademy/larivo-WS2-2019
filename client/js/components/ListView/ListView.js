import React from 'react'
import styles from './styles'
import {FlatList, View, Text} from 'react-native'

const ListView = ({data}) => (
  <View style={styles.container}>
    <FlatList
      data={data}
      renderItem={({item}) => (
        <>
          <Text>{item.title}</Text>
          <Text>{item.content}</Text>
        </>
      )}
      keyExtractor={item => item.id}
    />
  </View>
)

export default ListView
