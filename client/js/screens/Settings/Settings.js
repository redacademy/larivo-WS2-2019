import React from 'react'
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
} from 'react-native'
import LeftArrow from '../../components/LeftArrow'
import BellIcon from '../../../assets/icons/profile/icon-profile-bell.svg'
import UserIcon from '../../../assets/icons/profile/icon-profile-user.svg'
import SettingItem from '../../components/SettingItem'
import Button from '../../components/Button'

import styles from './styles'
import {useAuth} from '../../hooks'
const items = [
  {
    id: 1,
    icon: BellIcon,
    text: 'Notifications',
    screen: 'Notifications',
  },
  {
    id: 2,
    icon: UserIcon,
    text: 'Edit Profile',
    screen: 'EditProfile',
  },
]

const Settings = ({navigation}) => {
  const {logout} = useAuth()

  return (
    <SafeAreaView>
      <View style={styles.settings_container}>
        <View style={styles.settings_leftArrow}>
          <LeftArrow onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.settings_contentContainer}>
          <Text style={styles.settings_title}>Settings</Text>

          {items.map(item => {
            return (
              <View
                key={item.id}
                style={styles.settings_itemsConstainer}
              >
                <TouchableOpacity
                  style={styles.w_100}
                  onPress={() => {
                    navigation.navigate(item.screen)
                  }}
                >
                  <SettingItem icon={item.icon} text={item.text} />
                </TouchableOpacity>
              </View>
            )
          })}
          <View style={styles.settings_itemsConstainer} />
        </View>

        <View style={styles.setting_logout}>
          <View style={styles.setting_logoutBtn}>
            <Button onPress={logout} theme="dark">
              LOGOUT
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Settings
