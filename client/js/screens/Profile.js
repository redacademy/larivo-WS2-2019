import React from 'react'
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native'
import Button from '../Components/Button'
import StoryTitle from '../Components/StoryTitle'
import StoryAuthor from '../Components/StoryAuthor'

const Profile = () => {
  return (
    <ScrollView style={{backgroundColor: '#03dac4'}}>
      <SafeAreaView>
        <Text>Profile Page</Text>
        <View style={{paddingTop: 30, paddingLeft: 50}}>
          <StoryTitle> I'm the Title </StoryTitle>
        </View>
        <View style={{paddingTop: 10, paddingLeft: 50}}>
          <StoryAuthor> I'm the author name</StoryAuthor>
        </View>
        <View style={{paddingTop: 30, paddingLeft: 50}}>
          <Button>Refresh Name</Button>
        </View>
        <View style={{paddingTop: 30, paddingLeft: 50}}>
          <Button>Continue As Guest</Button>
        </View>
        <View style={{paddingTop: 30, paddingLeft: 50}}>
          <Button>Log In</Button>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Profile
