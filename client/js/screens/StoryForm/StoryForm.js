import React, {useState} from 'react'
import {
  SafeAreaView,
  TextInput,
  View,
  ScrollView,
  Text,
} from 'react-native'
import {Card} from '../../components/Card'
import {Popup} from '../../components/Popup/'
import Button from '../../components/Button'
import Hashtag from '../../components/Hashtag'
import styles from './styles'

const StoryForm = ({navigation}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState([])
  const [show, setShow] = useState(false)

  const handleTags = () => {
    if (tag === '') return
    setTags([...tags, tag])
    setTag('')
  }

  const handleSubmit = () => {
    setShow(true)
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
            <Button onPress={handleSubmit} theme="dark">
              PUBLISH
            </Button>
            <Button>Save As Draft</Button>
          </View>
          {tags && tags.length ? (
            <View style={styles.hashtagContainer}>
              <Text style={styles.hashtagTitle}>Your Hashtags</Text>
              <View style={styles.hashtags}>
                {tags.map((tag, i) => (
                  <Hashtag key={i} disabled>
                    {tag}
                  </Hashtag>
                ))}
              </View>
            </View>
          ) : null}
        </View>
      </ScrollView>
      <Popup text="Posted!" show={show} />
    </SafeAreaView>
  )
}

export default StoryForm
