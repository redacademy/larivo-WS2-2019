import React from 'react'
import {Text, View, ScrollView} from 'react-native'
import StoryTitle from '../../components/StoryTitle'
import NameInitials from '../../components/NameInitials'
import Header from '../../components/Header/Header'
import Paragraph from '../../components/Paragraph/Paragraph'
import SettingsIcon from '../../components/SettingsIcon/SettingsIcon'
import EditIcon from '../../components/EditIcon/EditIcon'
import {ProfileTabs} from '../../navigation'
import styles from './styles'

const Profile = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: '#ffff'}}>
      <Header>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 10,
          }}
        >
          <NameInitials>RV</NameInitials>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Text style={styles.numbers}>53</Text>
            <Text style={styles.textFollow}>Stories</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Text style={styles.numbers}>64.5K</Text>
            <Text style={styles.textFollow}>Followers</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Text style={styles.numbers}>1247</Text>
            <Text style={styles.textFollow}>Following</Text>
          </View>
          <View
            style={{
              display: 'flex',
            }}
          >
            <SettingsIcon
              onPress={() => navigation.navigate('Settings')}
            />
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
        </View>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </Paragraph>
      </Header>
      <ProfileTabs />
    </ScrollView>
  )
}

export default Profile
