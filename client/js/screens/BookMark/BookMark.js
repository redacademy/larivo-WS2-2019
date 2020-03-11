import React from 'react'
import styles from './styles'
import { Settings } from '../Settings'
import { Card } from '../../components/Card'
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  Image
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

const contents = [
  {
    id: 1,
    img: img1,
    title: 'Strength In Numbers',
    date: 'NOV. 12TH 2019',
    readTime: 3,
    text: 'The larger-than-life Arab-American music producer and DJ is known for and DJ is known',
    tags: ['Strength', 'Support System'],
    likes: 399,
    featured: true,
    author: "Holy Jesus"
  },
  {
    id: 2,
    img: img1,
    title: 'Strength In Numbers',
    date: 'NOV. 12TH 2019 | 3 MIN. READ',
    readTime: 3,
    text: 'The larger-than-life Arab-American music producer and DJ is known for…',
    tags: [],
    likes: 399,
    featured: true,
    author: "James Bond"
  },
  {
    id: 3,
    img: img1,
    title: 'Strength In Numbers',
    date: 'NOV. 12TH 2019 | 3 MIN. READ',
    readTime: 3,
    text: 'The larger-than-life Arab-American music producer and DJ is known for…',
    tags: [],
    likes: 399,
    featured: true,
    author: "Kill Bill"
  }
]

const BookMark = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.cardContainer}>
      {contents.map(item => {
        return (
          <FeaturedCard 
            item={item}
            key={item.id}
          />
        )
      })}

      <Text />
     </ScrollView>
    </SafeAreaView>
  )
}

export default BookMark
