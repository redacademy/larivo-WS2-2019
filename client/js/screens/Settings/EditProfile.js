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
import PasswordIcon from '../../../assets/icons/profile/icon-profile-password.svg'
import Button from '../../components/Button'

import SettingItem from '../../components/SettingItem'

import styles from './styles'
const items = [
  {
    id: 1,
    icon: UserIcon,
    text: 'Change Username',
    screen: 'ChangeUsername',
  },
  {
    id: 2,
    icon: PasswordIcon,
    text: 'Change Password',
    screen: 'ChangePassword',
  },
]

const EditProfile = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.settings_container}>
        <View style={styles.settings_leftArrow}>
          <LeftArrow onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.settings_contentContainer}>
          <Text style={styles.settings_title}>Edit Profile</Text>

          {items.map(item => {
            return (
              <View
                key={item.id}
                style={styles.settings_itemsConstainer}
              >
                <TouchableOpacity
                  style={{width: '100%'}}
                  onPress={() => {
                    navigation.navigate(item.screen)
                  }}
                >
                  <SettingItem
                    icon={item.icon}
                    text={item.text}
                    key={item.text}
                  />
                </TouchableOpacity>
              </View>
            )
          })}
          <View style={styles.settings_itemsConstainer} />
        </View>

        <View style={styles.setting_logout}>
          <View style={styles.setting_logoutBtn}>
            <Button theme="dark">LOGOUT</Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default EditProfile
