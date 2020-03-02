import React, {useState} from 'react'
import {
  Modal,
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
} from 'react-native'
import LeftArrow from '../../components/LeftArrow'

import styles from './styles'

// to be changed to settings component
const Notifications = ({modal}) => {
  return (
    <SafeAreaView>
      <View style={styles.settings_container}>
        <View style={styles.settings_leftArrow}>
          <TouchableOpacity
            onPress={() => {
              modal(false)
            }}
          >
            <LeftArrow />
          </TouchableOpacity>
        </View>
        <View style={styles.settings_contentContainer}>
          <Text style={styles.settings_title}>Notifications</Text>

          <View style={styles.settings_itemsConstainer} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Notifications
