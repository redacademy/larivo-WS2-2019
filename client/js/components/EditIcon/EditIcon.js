import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import EditButton from '../../../assets/icons/profile/icon-profile-edit.svg'

const EditIcon = () => (
  <View>
    <TouchableOpacity
      onPress={() => {
        alert('btn pressed')
      }}
    >
      <EditButton />
    </TouchableOpacity>
  </View>
)

export default EditIcon
