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
import SettingsIcon from '../components/SettingsIcon/SettingsIcon'
import EditIcon from '../components/EditIcon/EditIcon'
import InputField from '../components/InputField/InputField'

const Profile = () => {
  return (
    <ScrollView style={{backgroundColor: '#ffff'}}>
      <Header>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <NameInitials>RV</NameInitials>
          <View
            style={{
              display: 'flex',
            }}
          >
            <SettingsIcon />
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <StoryTitle>Roaring Velvet</StoryTitle>

          <EditIcon />
          {/* <Follow type="follow" /> */}
        </View>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </Paragraph>
      </Header>
      <View>
        <InputField />
      </View>
    </ScrollView>
  )
}

export default Profile
