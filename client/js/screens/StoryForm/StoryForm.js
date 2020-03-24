import React, {useState} from 'react'
import {
  SafeAreaView,
  TextInput,
  View,
  ScrollView,
  Text,
  FlatList,
} from 'react-native'
import {Card} from '../../components/Card'
import {Popup} from '../../components/Popup/'
import Button from '../../components/Button'
import Hashtag from '../../components/Hashtag'
import styles from './styles'
import {useCreateStory, useCreateDraft} from '../../hooks'

const StoryForm = ({navigation}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState([])
  const [show, setShow] = useState(false)
  const [createStory] = useCreateStory()
  const [createDraft] = useCreateDraft()

  const handleTags = () => {
    if (tag === '') return
    setTags([...tags, tag])
    setTag('')
  }

  const handlePublish = () => {
    setShow(true)
    createStory({
      variables: {
        title,
        content,
        hashtags: tags,
        published: true,
      },
    })
    setTitle('')
    setContent('')
    setTags([])
    setTimeout(() => {
      setShow(false)
      navigation.navigate('Home')
    }, 1500)
  }

  const handleDraft = () => {
    setShow(true)
    createDraft({
      variables: {
        title,
        content,
        hashtags: tags,
        published: false,
      },
    })
    console.log(title, content, tags)
    setTitle('')
    setContent('')
    setTags([])
    setTimeout(() => {
      setShow(false)
      navigation.navigate('Home')
    }, 1500)
  }

  return (
    <SafeAreaView style={styles.container}>
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
            <Button onPress={handleDraft}>Save As Draft</Button>
          </View>
          {tags && tags.length ? (
            <View style={styles.hashtagContainer}>
              <Text style={styles.hashtagTitle}>Your Hashtags</Text>
              <FlatList
                data={tags}
                numColumns="4"
                renderItem={({item}) => (
                  <Hashtag key={item} disabled>
                    {item}
                  </Hashtag>
                )}
                keyExtractor={item => item}
              />
            </View>
          ) : null}
        </View>
      </ScrollView>
      <Popup text="Success!" show={show} />
    </SafeAreaView>
  )
}

export default StoryForm
