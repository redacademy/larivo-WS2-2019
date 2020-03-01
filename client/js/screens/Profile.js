import React from 'react'
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native'
import StoryTitle from '../components/StoryTitle'
import NameInitials from '../components/NameInitials'
import Header from '../components/Header/Header'
import Paragraph from '../components/Paragraph/Paragraph'
import SettingsIcon from '../components/SettingsIcon/SettingsIcon'
import EditIcon from '../components/EditIcon/EditIcon'
import InputFieldPassword from '../components/InputField/InputFieldPassword'
import InputFieldEmail from '../components/InputField/InputFieldEmail'
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
    </ScrollView>
  )
}

export default Profile
