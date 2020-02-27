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
import Bookmark from '../components/Bookmark/Bookmark'
import Header from '../components/Header/Header'
import Paragraph from '../components/Paragraph/Paragraph'
import Follow from '../components/Follow/Follow'

const Profile = () => {
  return (
    <ScrollView style={{backgroundColor: '#ffff'}}>
      <Header>
        <NameInitials>RV</NameInitials>
        <StoryTitle>Roaring Velvet</StoryTitle>

        <Follow type="follow" />
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </Paragraph>
      </Header>
      <SafeAreaView>
        <View
          style={{
            paddingTop: 30,
            paddingLeft: 50,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <StoryTitle>I'm the Title</StoryTitle>
          <Bookmark />
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
          <Hashtag>Can't touch this.</Hashtag>

          <Hashtag disabled>Happyness</Hashtag>
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
