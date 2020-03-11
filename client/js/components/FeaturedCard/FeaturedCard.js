import React from 'react'
import styles from './styles'
import { Card } from '../Card'
import CardInitials from '../CardInitials'
import CardHashtag from  '../CardHashtag'
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  Image
} from 'react-native'

const FeaturedCard = ({item}) => {
  const {img, title, date, readTime, text, tags, likes, featured, author} = item
  return (
    
    <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={img}
        />
        <View style={styles.initial}>
          <CardInitials >{author}</CardInitials>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date} | {readTime} MIN. READ</Text>
          <Text style={styles.body} numberOfLines={2}>{text}</Text>
          <View style={styles.hashtagContainer}>
            <CardHashtag>{tags[0]}</CardHashtag>
            <CardHashtag>{tags[1]}</CardHashtag>
        </View>
        </View>
      </View>
  )
}

export default FeaturedCard