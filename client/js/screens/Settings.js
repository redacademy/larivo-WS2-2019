import React from 'react'
import { Text, SafeAreaView, View } from 'react-native'
import LeftArrow from '../components/LeftArrow'
import BellIcon from '../../assets/icons/profile/icon-profile-bell.svg'
import UserIcon from '../../assets/icons/profile/icon-profile-user.svg'
import DeleteIcon from '../../assets/icons/profile/icon-profile-delete.svg'
import SettingItem from '../components/SettingItem'

import styles from './styles'

// to be changed to settings component
const Settings = () => {
  return (
    <SafeAreaView>
      <View style={styles.settings_container}>
        <View style={styles.settings_leftArrow}>
          <LeftArrow />
        </View>
        <View style={styles.settings_contentContainer}>
          <Text style={styles.settings_title}>
            Setting
          </Text>
          <SettingItem icon={BellIcon} text='Notifications' />
          <SettingItem icon={UserIcon} text='Edit Profile' />
          <SettingItem icon={DeleteIcon} text='Delete Account' />
          <View style={styles.settings_itemsConstainer} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Settings