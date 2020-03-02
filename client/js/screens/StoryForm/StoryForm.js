import React, {useState} from 'react'
import {
  SafeAreaView,
  TextInput,
  View,
  ScrollView,
  Text,
} from 'react-native'
import {Card} from '../../components/Card'
import Button from '../../components/Button'
import Hashtag from '../../components/Hashtag'
import styles from './styles'

const StoryForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState([])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Card>
            <TextInput
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
            placeholder="Add #Hashtags"
            value={tag}
            onChangeText={val => setTag(val)}
            onSubmitEditing={() => setTags([...tags, tag])}
          />
          <View style={styles.buttonContainer}>
            <Button theme="dark">PUBLISH</Button>
            <Button>Save As Draft</Button>
          </View>
          {tags && tags.length ? (
            <View style={styles.hashtagContainer}>
              <Text style={styles.hashtagTitle}>Your Hashtags</Text>
              <View style={styles.hashtags}>
                {tags.map(tag => (
                  <Hashtag>{tag}</Hashtag>
                ))}
              </View>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default StoryForm
