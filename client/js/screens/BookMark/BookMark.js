import React, {useState, useEffect} from 'react'
import styles from './styles'
import readingTime from 'reading-time'
import {
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import {StoryCard} from '../../components/StoryCard'
import {Header} from '../../components/Header'
import {useAuth} from '../../hooks'
import {
  FILTERED_STORIES,
  FOLLOWING_USER_STORIES,
  USER_BOOKMARKS,
} from '../../context/apollo'
import {useQuery} from '@apollo/react-hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'
import {SearchTabs} from '../../navigation'

const BookMark = ({navigation, route}) => {
  const [search, setSearch] = useState('')
  const {user} = useAuth()

  const {
    loading: loading_faves,
    error: error_faves,
    data: data_faves,
  } = useQuery(USER_BOOKMARKS)

  const {
    loading: loading_filtered,
    error: error_filtered,
    data: data_filtered,
  } = useQuery(FILTERED_STORIES)

  const {
    loading: loading_following,
    error: error_following,
    data: data_following,
  } = useQuery(FOLLOWING_USER_STORIES)

  if (
    loading_faves ||
    loading_filtered ||
    loading_following ||
    typeof user === 'undefined'
  )
    return <Spinner />
  if (error_faves || error_filtered || error_following)
    return <NetWorkError />

  const allData = [
    ...data_faves.me.favoriteStories,
    ...data_filtered.filteredStories,
    ...data_following.me.following.reduce((acc, value) => {
      return [...acc, ...value.stories]
    }, []),
  ]

  const {userName, favoriteStories} = user.user

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
            data={allData}
            renderItem={({
              item: {id, author, title, createdAt, content, hashtags},
            }) => {
              const {text: readTime} = readingTime(content)
              return (
                <TouchableOpacity
                  style={styles.cardContainer}
                  onPress={() =>
                    navigation.navigate('HomeStory', {id})
                  }
                >
                  <StoryCard
                    userName={author.userName}
                    createdAt={createdAt}
                    readTime={readTime}
                    title={title}
                    content={content}
                    hashtags={hashtags}
                    bookmarked={data_faves.me.favoriteStories.some(
                      ({id: faveId}) => faveId === id,
                    )}
                  />
                </TouchableOpacity>
              )
            }}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </SafeAreaView>
  )
}

export default BookMark
