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
import Button from '../../components/Button'

// to be changed to settings component
const DeleteAccount = ({modal}) => {
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
          <Text style={styles.settings_title}>Delete Account</Text>

          <View style={styles.settings_itemsConstainer} />

          <Text style={styles.setting_delText}>
            Deleting your account will remove all stories, activity, and data. This cannot be undone.
          </Text>
        </View>

        <View style={styles.setting_logout}>
          <View style={styles.setting_logoutBtn}>
          <Button theme="dark" >DELETE</Button>
          </View>
        </View> 
      </View>
    </SafeAreaView>
  )
}

export default DeleteAccount
