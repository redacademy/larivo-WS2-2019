import React from 'react'
import {Text, SafeAreaView, ScrollView, View} from 'react-native'
import {getStoryById} from '../../hooks'
import storyStyles from './storyStyles'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'
import FormattedDate from '../../components/FormattedDate'
import CardHashtag from '../../components/CardHashtag'
import readingTime from 'reading-time'
import LeftArrow from '../../components/LeftArrow/LeftArrow'

const Story = ({route, navigation}) => {
  const {id: storyId} = route.params
  const {error, loading, story} = getStoryById(storyId)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />

  const {text: readTime} = readingTime(story.content)

  return (
    <SafeAreaView style={storyStyles.container}>
      <View style={storyStyles.backIcon}>
        <LeftArrow onPress={() => navigation.goBack()} />
      </View>
      <ScrollView>
        <View style={storyStyles.card}>
          <View style={storyStyles.content}>
            <Text style={storyStyles.title}>{story.title}</Text>
            <Text style={storyStyles.createdAt}>
              {story.author.userName.toUpperCase()}
            </Text>
            <Text style={storyStyles.createdAt}>
              <FormattedDate createdAt={story.createdAt} /> |{' '}
              {readTime}
            </Text>
            <Text style={storyStyles.body}>{story.content}</Text>

            <View style={storyStyles.hashtagContainer}>
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
