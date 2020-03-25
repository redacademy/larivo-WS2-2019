import React, {useState} from 'react'
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
} from 'react-native'
import LeftArrow from '../../components/LeftArrow'
import UserIcon from '../../../assets/icons/profile/icon-profile-user.svg'
import Button from '../../components/Button'
import SettingItem from '../../components/SettingItem'
import styles from './styles'
import {useAuth} from '../../hooks'
const items = [
  {
    id: 1,
    icon: UserIcon,
    text: 'Change Username',
    screen: 'ChangeUsername',
  },
]

const EditProfile = ({navigation}) => {
  const {logout} = useAuth()

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
            <Button onPress={logout} theme="dark">
              LOGOUT
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default EditProfile
