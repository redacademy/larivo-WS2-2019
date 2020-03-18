import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import NameInitials from '../NameInitials/NameInitials'
import styles from './styles'
import Paragraph from '../../components/Paragraph/Paragraph'
import SettingsIcon from '../../components/SettingsIcon/SettingsIcon'
import StoryTitle from '../../components/StoryTitle'
import EditIcon from '../../components/EditIcon/EditIcon'
import {useAuth} from '../../hooks'
import {Spinner} from '../../components/Spinner'

const HeaderProfile = ({navigation}) => {
  const {user} = useAuth()
  console.log('profile user', user)

  if (typeof user === 'undefined') return <Spinner />
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <NameInitials>{user.user.userName}</NameInitials>
          <View style={styles.followsContainer}>
            <Text style={styles.numbers}>53</Text>
            <Text style={styles.textFollow}>Stories</Text>
          </View>
          <View style={styles.followsContainer}>
            <Text style={styles.numbers}>64.5K</Text>
            <Text style={styles.textFollow}>Followers</Text>
          </View>
          <View style={styles.followsContainer}>
            <Text style={styles.numbers}>1247</Text>
            <Text style={styles.textFollow}>Following</Text>
          </View>
          <View>
            <SettingsIcon
              onPress={() => navigation.navigate('Settings')}
            />
          </View>
        </View>

        <View style={styles.titleContainer}>
          <StoryTitle>{user.user.userName}</StoryTitle>

          <EditIcon
            onPress={() => navigation.navigate('Bio', {user})}
          />
        </View>
        <Paragraph>{user.user.bio || 'lorem'}</Paragraph>
      </View>
    </SafeAreaView>
  )
}

export default HeaderProfile
