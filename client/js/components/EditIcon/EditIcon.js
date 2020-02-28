import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import EditButton from '../../../assets/icons/profile/icon-profile-edit.svg'
import styles from './styles'

const EditIcon = () => (
  <View>
    <TouchableOpacity
      onPress={() => {
        alert('btn pressed')
      }}
      style={styles.Edit}
    >
      <EditButton />
    </TouchableOpacity>
  </View>
)

export default EditIcon
