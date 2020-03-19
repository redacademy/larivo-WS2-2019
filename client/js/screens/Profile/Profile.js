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
    <View>
      <HeaderProfile navigation={navigation} />
      <ScrollView>
        <ProfileTabs />
      </ScrollView>
    </View>
  )
}

export default Profile
