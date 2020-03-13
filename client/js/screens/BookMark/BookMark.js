import React from 'react'
import styles from './styles'
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  View
} from 'react-native'
import { Header } from '../../components/Header'
import FeaturedCard from '../../components/FeaturedCard'

import {userStories} from '../../tempData/userStories'

const BookMark = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View  style={styles.cardContainer}>
        {userStories.map(item => {
        return (
          <FeaturedCard 
            item={item}
            key={item.id}
          />
        )
      })}
      <Text />
      </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default BookMark
