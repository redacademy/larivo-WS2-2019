import React from 'react'
import styles from './styles'
import { Card } from '../Card'
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  Image
} from 'react-native'

const FeaturedCard = ({img}) => {
  return (
    <View style={styles.cardContainer}>
      <Card>
        <Image
          style={styles.cardImage}
          source={img}
        />
        <View style={styles.content}>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
        </View>
      </Card>
    </View>
  )
}

export default FeaturedCard