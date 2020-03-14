import React from 'react'
import styles from './styles'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  Animated,
  TouchableOpacity,
} from 'react-native'
import {Card} from '../../components/Card'
import {Header} from '../../components/Header'
import NameInitials from '../../components/NameInitials/NameInitials'
import InputSearchField from '../../components/InputField/InputSearchField'
import getInitials from '../../utils/getInitials'
import FeaturedCard from '../../components/FeaturedCard'
import Hashtag from '../../components/Hashtag'
import {useAuth} from '../../hooks'
import {USER_FEED} from '../../context/apollo'
import {useQuery} from '@apollo/react-hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'

const Home = ({navigation}) => {
  const {user} = useAuth()
  const {
    loading,
    error,
    data,
    refetch,
    fetchMore,
    networkStatus,
  } = useQuery(USER_FEED)
  console.log('home data', data)
  if (loading) return <Spinner />
  if (error) return <NetWorkError />
  const {userName} = user.user

  return (
    <SafeAreaView style={styles.container}>
      <Header userName={userName} />
      <FlatList
        refreshing={networkStatus === 4}
        onRefresh={() => refetch()}
        onEndReached={() =>
          fetchMore({
            updateQuery: (prev, {fetchMoreResult}) => {
              if (!fetchMoreResult) return prev
              return Object.assign({}, prev, {
                userFeed: [
                  ...prev.userFeed,
                  ...fetchMoreResult.userFeed,
                ],
              })
            },
          })
        }
        data={data.userFeed}
        renderItem={({
          item: {id, author, title, createdAt, content, hashtags},
        }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeStory', {id})}
          >
            <Card key={id}>
              <Text>{author.userName}</Text>
              <Text>{createdAt}</Text>
              <Text>{title}</Text>
              <Text>{content}</Text>
              <Hashtag disabled>
                {hashtags.map(tag => tag.name)}
              </Hashtag>
            </Card>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      {/* <ScrollView>
        <View style={{backgroundColor: '#03dac4'}}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={{marginLeft: 25}} />
            <Hashtag>some hashtag</Hashtag>
            <Hashtag>some hashtag2</Hashtag>
            <Hashtag>some hashtag3</Hashtag>
            <Hashtag>some hashtag4</Hashtag>
          </ScrollView>

          <Text style={styles.featuredText}>Featured</Text>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            // centerContent={true}
            style={{height: 390}}
          >
            <View style={{marginLeft: 25}} />
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
        <View style={styles.userCardContainer}>
          {userStories.map(item => {
            return (
              <FeaturedCard item={item} home={true} key={item.id} />
            )
          })}
          <View style={{marginBottom: 40}} />
        </View>
      </ScrollView> */}
    </SafeAreaView>
  )
}

export default Home
