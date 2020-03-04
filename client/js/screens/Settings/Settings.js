import React, {useState} from 'react'
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
} from 'react-native'
import LeftArrow from '../../components/LeftArrow'
import BellIcon from '../../../assets/icons/profile/icon-profile-bell.svg'
import UserIcon from '../../../assets/icons/profile/icon-profile-user.svg'
import DeleteIcon from '../../../assets/icons/profile/icon-profile-delete.svg'
import SettingItem from '../../components/SettingItem'
import Button from '../../components/Button'

import styles from './styles'
const items = [
  {
    icon: BellIcon,
    text: 'Notifications',
    screen: 'Notifications',
  },
  {
    icon: UserIcon,
    text: 'Edit Profile',
    screen: 'EditProfile',
  },
  {
    icon: DeleteIcon,
    text: 'Delete Account',
    screen: 'DeleteAccount',
  },
]

const Settings = ({navigation}) => {

  return (
    <SafeAreaView>

      <View style={styles.settings_container}>
        <View style={styles.settings_leftArrow}>
          <LeftArrow onPress={() => navigation.goBack()}/>
        </View>
        <View style={styles.settings_contentContainer}>
          <Text style={styles.settings_title}>Setting</Text>

          {items.map(item => {
            return (
              <View style={styles.settings_itemsConstainer}>
                <TouchableOpacity
                  style={{width: '100%'}}
                  onPress={() => {
                    navigation.navigate(item.screen)
                  }}
                >
                  <SettingItem icon={item.icon} text={item.text} key={item.text}/>
                </TouchableOpacity>
              </View>
            )
          })}
          <View style={styles.settings_itemsConstainer} />
        </View>

          <View style={styles.setting_logout}>
            <View style={styles.setting_logoutBtn}>
            <Button theme="dark" >LOGOUT</Button>
            </View>
          </View> 
          
      </View>
    </SafeAreaView>
  )
}

export default Settings
