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
import {USER_HEADER_INFO} from '../../context/apollo'
import {useQuery} from '@apollo/react-hooks'
import {Spinner} from '../../components/Spinner'
import HeaderProfile from '../../components/HeaderProfile/HeaderProfile'
import {NetWorkError} from '../../components/FourOhFour'

const Profile = ({navigation}) => {
  const {loading, error} = useQuery(USER_HEADER_INFO)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />

  return (
    <SafeAreaView style={styles.profile_container}>
      <HeaderProfile navigation={navigation} />
      <ProfileTabs />
    </SafeAreaView>
  )
}

export default Profile
