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
import styles from './styles'

const Bio = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Card>
          <Text style={styles.titleInput}>Update your Bio</Text>
          {/* <TextInput
            placeholderTextColor="#1E6A62"
            style={styles.titleInput}
            value={title}
            onChangeText={val => setTitle(val)}
            placeholder="Update your Bio"
          /> */}
          <TextInput
            style={styles.contentInput}
            multiline={true}
            value={content}
            onChangeText={val => setContent(val)}
            placeholder="New Bio..."
          />
        </Card>

        <View style={styles.buttonContainer}>
          <Button theme="dark">Update Bio</Button>
        </View>
      </View>
      <Popup text="Posted!" />
    </SafeAreaView>
  )
}

export default Bio

// show={show}
