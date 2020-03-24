import React from 'react'
import {Text, View} from 'react-native'
import NameInitials from '../NameInitials/NameInitials'
import styles from './styles'
import Paragraph from '../../components/Paragraph/Paragraph'
import SettingsIcon from '../../components/SettingsIcon/SettingsIcon'
import StoryTitle from '../../components/StoryTitle'
import EditIcon from '../../components/EditIcon/EditIcon'
import {USER_HEADER_INFO} from '../../context/apollo'
import {useQuery} from '@apollo/react-hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../FourOhFour'

const HeaderProfile = ({navigation}) => {
  const {loading, error, data} = useQuery(USER_HEADER_INFO)

  if (loading) return null
  if (error) return <NetWorkError />

  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <NameInitials>{data.me.userName}</NameInitials>
        <View style={styles.followsContainer}>
          <Text style={styles.numbers}>{data.me.stories.length}</Text>
          <Text style={styles.textFollow}>Stories</Text>
        </View>
        <View style={styles.followsContainer}>
          <Text style={styles.numbers}>
            {data.me.followers.length}
          </Text>
          <Text style={styles.textFollow}>Followers</Text>
        </View>
        <View style={styles.followsContainer}>
          <Text style={styles.numbers}>
            {data.me.following.length}
          </Text>
          <Text style={styles.textFollow}>Following</Text>
        </View>
        <View>
          <SettingsIcon
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
      </View>

      <View style={styles.titleContainer}>
        <StoryTitle>{data.me.userName}</StoryTitle>

        <EditIcon onPress={() => navigation.navigate('Bio')} />
      </View>
      <Paragraph>{data.me.bio || 'lorem'}</Paragraph>
    </View>
  )
}

export default HeaderProfile
