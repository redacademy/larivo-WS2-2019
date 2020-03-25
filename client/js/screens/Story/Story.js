import React from 'react'
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native'
import {getStoryById} from '../../hooks'
import {useFavoriteStory, useUnFavoriteStory} from '../../hooks'
import styles from './styles'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'
import ActiveBookmarkIcon from '../../../assets/icons/login/icon-bookmark-active.svg'
import InActiveBookmarkIcon from '../../../assets/icons/login/icon-bookmark-inactive.svg'
import {USER_BOOKMARKS} from '../../context/apollo'
import {useQuery} from '@apollo/react-hooks'
import FormattedDate from '../../components/FormattedDate'
import CardHashtag from '../../components/CardHashtag'
import readingTime from 'reading-time'
import LeftArrow from '../../components/LeftArrow/LeftArrow'

const Story = ({route, navigation}) => {
  const {id: storyId} = route.params
  const [favoriteStory] = useFavoriteStory()
  const [unFavoriteStory] = useUnFavoriteStory()
  const {error, loading, story} = getStoryById(storyId)
  const {
    loading: loading_faves,
    error: error_faves,
    data: data_faves,
  } = useQuery(USER_BOOKMARKS)

  const handleFavoriteStory = () =>
    data_faves.me.favoriteStories.some(
      ({id: faveId}) => faveId === storyId,
    )
      ? unFavoriteStory({variables: {id: storyId}})
      : favoriteStory({variables: {id: storyId}})

  if (loading || loading_faves) return <Spinner />
  if (error || error_faves) return <NetWorkError />

  const {text: readTime} = readingTime(story.content)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backIcon}>
        <LeftArrow onPress={() => navigation.goBack()} />
      </View>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.bookmarkIcon}>
            <TouchableOpacity onPress={handleFavoriteStory}>
              {data_faves.me.favoriteStories.some(
                ({id: faveId}) => faveId === storyId,
              ) ? (
                <ActiveBookmarkIcon />
              ) : (
                <InActiveBookmarkIcon />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>{story.title}</Text>
            <Text style={styles.createdAt}>
              {story.author.userName.toUpperCase()}
            </Text>
            <Text style={styles.createdAt}>
              <FormattedDate createdAt={story.createdAt} /> |{' '}
              {readTime}
            </Text>
            <Text style={styles.body}>{story.content}</Text>

            <View style={styles.hashtagContainer}>
              {story.hashtags.map(tag => {
                return (
                  <CardHashtag key={tag.id}>{tag.name}</CardHashtag>
                )
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Story
