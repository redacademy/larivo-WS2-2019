import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import SettingsButton from '../../../assets/icons/profile/icon-profile-settings.svg'

const SettingsIcon = () => (
  <View>
    <TouchableOpacity
      onPress={() => {
        alert('btn pressed')
      }}
    >
      <SettingsButton />
    </TouchableOpacity>
  </View>
)

export default SettingsIcon
