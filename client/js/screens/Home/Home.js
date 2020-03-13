import React from 'react'
import styles from './styles'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  Animated
} from 'react-native'
import {Card} from '../../components/Card'
import {Header} from '../../components/Header'
import NameInitials from '../../components/NameInitials/NameInitials'
import InputSearchField from '../../components/InputField/InputSearchField'
import getInitials from '../../utils/getInitials'
import FeaturedCard from '../../components/FeaturedCard'
import Hashtag from '../../components/Hashtag'
import {featuredStories} from '../../tempData/featuredStories'
import {userStories} from '../../tempData/userStories'

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <View style={styles.searchBox}>
          <NameInitials
            onPress={() => navigation.navigate('Profile')}
          >
            {getInitials('Edin Kaymakqi')}
          </NameInitials>
          <InputSearchField placeholder="Search for topics of interest" />
        </View>
      </Header>
      <ScrollView>
        <View style={{ backgroundColor: '#03dac4'}}>
        <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
          <View style={{marginLeft:25}}/>
          <Hashtag>some hashtag</Hashtag>
          <Hashtag>some hashtag2</Hashtag>
          <Hashtag>some hashtag3</Hashtag>
          <Hashtag>some hashtag4</Hashtag>
        </ScrollView>

        <Text style={styles.featuredText}>
          Featured
        </Text>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          // centerContent={true}
          style={{height: 390}}
        >
          <View style={{marginLeft:25}}/>
          {featuredStories.map(item => {
            return (
              <View style={styles.featuredCardContainer}>
                <FeaturedCard 
                  item={item}
                  home={true}
                  key={item.id}
                />
              </View>
              )
              })}
          </ScrollView>
      </View>
      <View 
      style={styles.userCardContainer}
      >
        {userStories.map(item => {
          return (
              <FeaturedCard 
                item={item}
                home={true}
                key={item.id}
              />
            )
            })}
            <View style={{ marginBottom: 40 }}/>
         </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
