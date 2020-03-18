import React from 'react'
import {Text, View, ScrollView, SafeAreaView} from 'react-native'
import StoryTitle from '../../components/StoryTitle'
import NameInitials from '../../components/NameInitials'
import Header from '../../components/Header/Header'
import Paragraph from '../../components/Paragraph/Paragraph'
import SettingsIcon from '../../components/SettingsIcon/SettingsIcon'
import EditIcon from '../../components/EditIcon/EditIcon'
import {ProfileTabs} from '../../navigation'
import styles from './styles'
import {useAuth} from '../../hooks'
import {Spinner} from '../../components/Spinner'
import HeaderProfile from '../../components/HeaderProfile/HeaderProfile'

const Profile = ({navigation}) => {
  const {user} = useAuth()
  console.log('profile user', user)

  if (typeof user === 'undefined') return <Spinner />
  return (
    <SafeAreaView style={{backgroundColor: '#03dac4'}}>
      <HeaderProfile />
      <ScrollView style={{backgroundColor: '#03dac4'}}>
        {/* <View style={styles.headerContainer}>
          <NameInitials>RV</NameInitials>
          <View style={styles.followsContainer}>
            <Text style={styles.numbers}>53</Text>
            <Text style={styles.textFollow}>Stories</Text>
          </View>
          <View style={styles.textFollow}>
            <Text style={styles.numbers}>64.5K</Text>
            <Text style={styles.textFollow}>Followers</Text>
          </View>
          <View style={styles.followsContainer}>
            <Text style={styles.numbers}>1247</Text>
            <Text style={styles.textFollow}>Following</Text>
          </View>
          <View>
            <SettingsIcon
              onPress={() => navigation.navigate('Settings', {user})}
            />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <StoryTitle>Roaring Velvet</StoryTitle>

          <EditIcon
            onPress={() => navigation.navigate('Bio', {user})}
          />
        </View>
        <Paragraph>{user.user.bio || 'lorem'}</Paragraph> */}

        <ProfileTabs />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
