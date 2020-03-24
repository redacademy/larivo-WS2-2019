import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import styles from './styles'
import {getStoryById} from '../../hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'
import Button from '../../components/Button'
import {Popup} from '../../components/Popup/'
import {Card} from '../../components/Card'
import Hashtag from '../../components/Hashtag'
import {usePublish} from '../../hooks'
import LeftArrow from '../../components/LeftArrow/LeftArrow'

const Draft = ({route, navigation}) => {
  const {id: draftId} = route.params
  const {error, loading, story} = getStoryById(draftId)
  console.log(story)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState([])
  console.log(tags)
  const [show, setShow] = useState(false)
  const [publish] = usePublish()

  useEffect(() => {
    if (story) {
      setTitle(story.title)
      setContent(story.content)
      setTags([...story.hashtags.map(tag => tag.name)])
    }
  }, [story])

  const handleTags = () => {
    if (tag === '') return
    setTags([...tags, tag])
    setTag('')
  }

  const handlePublish = () => {
    setShow(true)
    publish({
      variables: {id: draftId, title, content, hashtags: tags},
    })
    setTitle('')
    setContent('')
    setTags([])
    setTimeout(() => {
      setShow(false)
      navigation.navigate('Profile')
    }, 1500)
  }

  if (loading) return <Spinner />
  if (error) return <NetWorkError />

  return (
    <SafeAreaView style={styles.container}>
      <LeftArrow onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.content}>
          <Card>
            <TextInput
              autoFocus={true}
              placeholderTextColor="#1E6A62"
              style={styles.titleInput}
              value={title}
              onChangeText={val => setTitle(val)}
              placeholder="Give Your Story a Title"
            />
            <TextInput
              style={styles.contentInput}
              multiline={true}
              value={content}
              onChangeText={val => setContent(val)}
              placeholder="Write your story here..."
            />
          </Card>
          <TextInput
            style={styles.tagInput}
            blurOnSubmit={false}
            placeholder="Add #Hashtags"
            value={tag}
            onChangeText={val => setTag(val)}
            onSubmitEditing={handleTags}
          />
          <View style={styles.buttonContainer}>
            <Button
              disabled={!title || !content || tags.length < 0}
              onPress={handlePublish}
              theme="dark"
            >
              PUBLISH
            </Button>
          </View>
          <View style={styles.hashtagContainer}>
            <Text style={styles.hashtagTitle}>Your Hashtags</Text>
            <FlatList
              data={tags}
              numColumns="4"
              renderItem={({item}) => (
                <Hashtag key={item.id} disabled>
                  {item}
                </Hashtag>
              )}
              keyExtractor={item => item}
            />
          </View>
        </View>
      </ScrollView>
      <Popup text="Success!" show={show} />
    </SafeAreaView>
  )
}

export default Draft
