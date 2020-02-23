import React from 'react'
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native'
import Button from '../Components/Button'
import StoryTitle from '../Components/StoryTitle'
import StoryAuthor from '../Components/StoryAuthor'

const Profile = () => {
  return (
    <SafeAreaView>
      <Text>Profile Page</Text>
      <View style={{paddingTop: 30, paddingLeft: 50}}>
        <StoryTitle />
      </View>
      <View style={{paddingTop: 10, paddingLeft: 50}}>
        <StoryAuthor />
      </View>
      <View style={{paddingTop: 30, paddingLeft: 50}}>
        <Button />
      </View>
      <View style={{paddingTop: 30, paddingLeft: 50}}>
        <Button />
      </View>
    </SafeAreaView>
  )
}

export default Profile
