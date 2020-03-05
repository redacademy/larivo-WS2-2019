import React from 'react'
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Card,
} from 'react-native'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Popup from '../../components/Popup'

const Bio = () => (
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

        <View style={styles.buttonContainer}>
          <Button onPress={handleSubmit} theme="dark">
            PUBLISH
          </Button>
          <Button>Save As Draft</Button>
        </View>
      </View>
    </ScrollView>
    <Popup text="Posted!" show={show} />
  </SafeAreaView>
)

export default Bio
