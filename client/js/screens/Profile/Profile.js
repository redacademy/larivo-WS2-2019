import React from 'react'
import {SafeAreaView} from 'react-native'
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
