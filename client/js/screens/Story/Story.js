import React from 'react'
import { Text, SafeAreaView, Button, FlatList, ScrollView, View } from 'react-native'
import { getStoryById } from '../../hooks'
import { useFavoriteStory } from '../../hooks'
import styles from './styles'
import { Spinner } from '../../components/Spinner'
import { NetWorkError } from '../../components/FourOhFour'
import { Card } from '../../components/Card'
import Hashtag from '../../components/Hashtag'
import BookmarkIcon from '../../../assets/icons/login/icon-bookmark-active.svg'
import Like from '../../../assets/icons/reactions/icon-reactions-thumbs_up-inactive.svg'
import Heart from '../../../assets/icons/reactions/icon-reactions-heart-inactive.svg'
import Sad from '../../../assets/icons/reactions/icon-reactions-sad-inactive.svg'
import Speechless from '../../../assets/icons/reactions/icon-reactions-speechless-inactive.svg'
import Clap from '../../../assets/icons/reactions/icon-reactions-high_five-inactive.svg'
import FormattedDate from '../../components/FormattedDate'
import CardHashtag from '../../components/CardHashtag'
import readingTime from 'reading-time'

const Story = ({ route, navigation }) => {
  const { id: storyId } = route.params
  const [favoriteStory] = useFavoriteStory()
  const { error, loading, story } = getStoryById(storyId)
  console.log(story)

  const handleFavoriteStory = () =>
    favoriteStory({ variables: { id: storyId } })

  if (loading) return <Spinner />
  if (error) return <NetWorkError />

  const {text: readTime} = readingTime(story.content)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.backIcon} onPress={() => navigation.goBack()}>x</Text>
      <ScrollView>
        <View style={styles.card}>

          <View style={styles.bookmarkIcon}>
            <BookmarkIcon />
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>{story.title}</Text>
            <Text style={styles.createdAt}>{story.author.userName.toUpperCase()}</Text>
            <Text style={styles.createdAt}>
              <FormattedDate createdAt={story.createdAt} />  |  {readTime}</Text>
            <Text style={styles.body}>{story.content}</Text>

            <View style={styles.hashtagContainer}>
              {story.hashtags.map((tag) => {
                return (
                  <CardHashtag key={tag.id}>{tag.name}</CardHashtag>
                )
              })}
            </View>
          </View>
        </View>
        <View style={styles.reactionsContainer}>
          <View style={styles.reactText} >
            <Like style={styles.reactions} />
            <Text style={styles.body}>{'99'}</Text>
          </View>
          <View style={styles.reactText} >
            <Heart style={styles.reactions} />
            <Text style={styles.body}>{'99'}</Text>
          </View>
          <View style={styles.reactText} >
            <Sad style={styles.reactions} />
            <Text style={styles.body}>{'99'}</Text>
          </View>
          <View style={styles.reactText} >
            <Speechless style={styles.reactions} />
            <Text style={styles.body}>{'99'}</Text>
          </View>
          <View style={styles.reactText} >
            <Clap style={styles.reactions} />
            <Text style={styles.body}>{'99'}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Story
