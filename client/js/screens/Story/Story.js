import React from 'react'
import {Text, SafeAreaView, Button, FlatList} from 'react-native'
import {getStoryById} from '../../hooks'
import {useFavoriteStory} from '../../hooks'
import styles from './styles'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'
import {Card} from '../../components/Card'
import Hashtag from '../../components/Hashtag'

const Story = ({route, navigation}) => {
  const {id: storyId} = route.params
  const [favoriteStory] = useFavoriteStory()
  const {error, loading, story} = getStoryById(storyId)
  console.log(story)

  const handleFavoriteStory = () =>
    favoriteStory({variables: {id: storyId}})

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
        <FlatList
          data={story.hashtags}
          numColumns="4"
          renderItem={({item}) => (
            <Hashtag key={item.id} disabled>
              {item.name}
            </Hashtag>
          )}
          keyExtractor={item => item}
        />
        <Button onPress={handleFavoriteStory} title="Bookmark" />
      </Card>
    </SafeAreaView>
  )
}

export default Story
