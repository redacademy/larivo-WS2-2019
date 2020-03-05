import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import EditButton from '../../../assets/icons/profile/icon-profile-edit.svg'
import styles from './styles'

const EditIcon = ({onPress}) => (
  <View>
    <TouchableOpacity onPress={onPress} style={styles.Edit}>
      <EditButton />
    </TouchableOpacity>
  </View>
)

export default EditIcon
