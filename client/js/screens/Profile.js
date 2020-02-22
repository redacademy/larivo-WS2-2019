import React from 'react'
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native'
import Button from '../Components/Button'
import StoryTitle from '../Components/StoryTitle'

const Profile = () => {
  return (
    <SafeAreaView>
      <Text>Profile Page</Text>
      <View style={{paddingTop: 30, paddingLeft: 50}}>
        <StoryTitle />
        <Button />
      </View>
    </SafeAreaView>
  )
}

export default Profile
