import React, {useState} from 'react'
import styles from './styles'
import readingTime from 'reading-time'
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  View
} from 'react-native'
import {StoryCard} from '../../components/StoryCard'
import {Header} from '../../components/Header'
import Hashtag from '../../components/Hashtag'
import {useAuth} from '../../hooks'
import {USER_FEED} from '../../context/apollo'
import {useQuery} from '@apollo/react-hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'
import {SearchTabs} from '../../navigation'

const Home = ({navigation, route}) => {
  const [search, setSearch] = useState('')
  const {user} = useAuth()
  const {
    loading,
    error,
    data,
    refetch,
    fetchMore,
    networkStatus,
  } = useQuery(USER_FEED)
  console.log(route)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />

  const {userName} = user.user

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        userName={userName}
        search={search}
        setSearch={setSearch}
      />
      {search.length ? (
        <SearchTabs
          route={route}
          navigation={navigation}
          search={search}
        />
      ) : (
        <View style={styles.listView}>
        <FlatList
          data={data.userFeed}
          renderItem={({
            item: {id, author, title, createdAt, content, hashtags},
          }) => {
            const {text: readTime} = readingTime(content)
            return (
              <TouchableOpacity
                style={styles.cardContainer}
                onPress={() => navigation.navigate('HomeStory', {id})}
              >
                <StoryCard
                  userName={author.userName}
                  createdAt={createdAt}
                  readTime={readTime}
                  title={title}
                  content={content}
                  hashtags={hashtags}
                  bookmarked={null}
                />
              </TouchableOpacity>
            )
          }}
          keyExtractor={item => item.id}
        />
      </View>)}
    </SafeAreaView>
  )
}

export default Home
