import React from 'react'
import {View, Text, SafeAreaView, Modal} from 'react-native'
import styles from './styles'
import {STORY} from '../../context/apollo'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'
import {getStoryById} from '../../hooks'
import {Card} from '../../components/Card'
import Hashtag from '../../components/Hashtag'

const Story = ({route, navigation}) => {
  const {id} = route.params
  const {error, loading, story} = getStoryById(id)
  if (loading) return <Spinner />
  if (error) return <NetWorkError />
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.goBack()}>x</Text>
      <Card>
        <Text style={styles.text}>{story.title}</Text>
        <Text style={styles.text}>{story.createdAt}</Text>
        <Text style={styles.text}>{story.author.userName}</Text>
        <Text style={styles.text}>{story.content}</Text>
        <Hashtag disabled style={styles.text}>
          {story.hashtags.map(tag => tag.name)}
        </Hashtag>
      </Card>
    </SafeAreaView>
  )
}

export default Story
