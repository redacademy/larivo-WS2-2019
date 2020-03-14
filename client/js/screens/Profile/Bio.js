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
import LeftArrow from '../../components/LeftArrow'
import styles from './styles'
import {useUpdateBio} from '../../hooks'

const Bio = ({navigation}) => {
  const [updateBio] = useUpdateBio()

  const [content, setContent] = useState('')
  const [show, setShow] = useState(false)

  const handleSubmit = () => {
    // setShow(true)
    updateBio({
      variables: {
        bio: content,
      },
    })
    setContent('')
    // setTimeout(() => {
    //   setShow(false)
    //   navigation.goBack()
    // }, 1500)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.settings_leftArrowBio}>
          <LeftArrow onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.content}>
          <Card>
            <Text style={styles.titleInput}>Bio</Text>
            <TextInput
              style={styles.contentInput}
              multiline={true}
              value={content}
              onChangeText={val => setContent(val)}
              placeholder="Update your Bio here..."
            />
          </Card>
          <View style={styles.buttonContainer}>
            <Button onPress={handleSubmit} theme="dark">
              Update Bio
            </Button>
          </View>
        </View>
      </ScrollView>
      <Popup text="Bio updated!" show={show} />
    </SafeAreaView>
  )
}

export default Bio
