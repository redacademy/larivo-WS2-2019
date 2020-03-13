import React from 'react'
import styles from './styles'
import { Settings } from '../Settings'
import { Card } from '../../components/Card'
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  View
} from 'react-native'
import LeftArrow from '../../components/LeftArrow'
import BellIcon from '../../../assets/icons/profile/icon-profile-bell.svg'
import UserIcon from '../../../assets/icons/profile/icon-profile-user.svg'
import DeleteIcon from '../../../assets/icons/profile/icon-profile-delete.svg'
import SettingItem from '../../components/SettingItem'
import Button from '../../components/Button'
import { Header } from '../../components/Header'
import NameInitials from '../../components/NameInitials/NameInitials'
import InputSearchField from '../../components/InputField/InputSearchField'
import img1 from '../../../assets/img/lions.jpg'
import FeaturedCard from '../../components/FeaturedCard'

const stories = [
  {
    id: 1,
    img: img1,
    title: 'Strength In Numbers',
    createdAt: 'NOV. 12TH 2019',
    readTime: 3,
    content: 'The larger-than-life Arab-American music producer and DJ is known for and DJ is known',
    hashtags: ['Strength', 'Support System', 'tag3', 'tag4'],
    likes: 10,
    loves: 20,
    neutrals: 30,
    sads: 10,
    claps: 22,
    featured: true,
    author: "Aesus ist",
    bookmarked: false
  },
  {
    id: 2,
    img: img1,
    title: 'Story 2',
    createdAt: 'NOV. 12TH 2019',
    readTime: 3,
    content: 'The larger-than-life Arab-American music producer and DJ is known for and DJ is known',
    hashtags: ['Strength', 'Support System', 'tag3', 'tag4'],
    likes: 34,
    loves: 5,
    neutrals: 3,
    sads: 20,
    claps: 32,
    featured: false,
    author: "James Bond",
    bookmarked: true
  },
  {
    id: 3,
    img: img1,
    title: 'Story 3',
    createdAt: 'NOV. 12TH 2019',
    readTime: 3,
    content: 'The larger-than-life Arab-American music producer and DJ is known for and DJ is known',
    hashtags: ['Strength', 'Support System', 'tag3', 'tag4'],
    likes: 10,
    loves: 20,
    neutrals: 30,
    sads: 10,
    claps: 22,
    featured: true,
    author: "Hello Kitty",
    bookmarked: true
  },
]

const BookMark = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View  style={styles.cardContainer}>
      {stories.map(item => {
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
