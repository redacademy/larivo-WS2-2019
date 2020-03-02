import React, {useState} from 'react'
import {View, Text} from 'react-native'
import styles from './styles'
import PostedIcon from '../../../assets/icons/storyForm/posted_icon.svg'

const Popup = ({text, show}) => {
  return show ? (
    <View style={styles.popup}>
      <Text style={styles.popupText}>{text}</Text>
      <PostedIcon style={styles.icon} />
    </View>
  ) : null
}
export default Popup
