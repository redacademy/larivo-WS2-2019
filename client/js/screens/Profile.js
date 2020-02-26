import React from 'react'
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native'
import Button from '../components/Button'
import StoryTitle from '../components/StoryTitle'
import StoryAuthor from '../components/StoryAuthor'
import NameInitials from '../components/NameInitials'
import Hashtag from '../components/Hashtag'
import ReactionBar from '../components/ReactionBar'
import Bookmar from '../components/Bookmark/Bookmark'

const Profile = () => {
  return (
    <ScrollView style={{backgroundColor: '#03dac4'}}>
      <SafeAreaView>
        <Text>Profile Page</Text>
        <View
          style={{
            paddingTop: 30,
            paddingLeft: 50,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <NameInitials>RV</NameInitials>
          <StoryTitle>I'm the Title</StoryTitle>
          <Bookmar type="booked" />
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
        <View
          style={{
            paddingTop: 30,
            paddingLeft: 50,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Hashtag>Anxiety</Hashtag>

          <Hashtag>Happyness</Hashtag>
          <Hashtag>Random</Hashtag>
        </View>

        <View
          style={{
            paddingTop: 30,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <ReactionBar type="like" />
          <ReactionBar type="love" />
          <ReactionBar type="clap" />
          <ReactionBar type="speechless" />
          <ReactionBar type="sad" />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Profile
