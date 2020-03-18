import React from 'react'
import {Text, View, TouchableOpacity, ScrollView} from 'react-native'
import NameInitials from '../NameInitials/NameInitials'
import styles from './styles'
import Paragraph from '../../components/Paragraph/Paragraph'
import SettingsIcon from '../../components/SettingsIcon/SettingsIcon'
import StoryTitle from '../../components/StoryTitle'
import EditIcon from '../../components/EditIcon/EditIcon'

const HeaderProfile = () => {
  return (
    <View style={styles.headerContainer}>
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
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
      <View style={styles.titleContainer}>
        <StoryTitle>Roaring Velvet</StoryTitle>

        <EditIcon />
      </View>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
    </View>
  )
}

export default HeaderProfile
