import React, {useState} from 'react'
import {
  Switch,
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
} from 'react-native'
import LeftArrow from '../../components/LeftArrow'
import Toggle from '../../components/Toggle'
import Button from '../../components/Button'
import styles from './styles'
import {useAuth} from '../../hooks'

const Notifications = ({navigation, modal}) => {
  const {logout} = useAuth()

  return (
    <SafeAreaView>
      <View style={styles.settings_container}>
        <View style={styles.settings_leftArrow}>
          <TouchableOpacity
            onPress={() => {
              modal(false)
            }}
          >
            <LeftArrow onPress={() => navigation.goBack()} />
          </TouchableOpacity>
        </View>
        <View style={styles.settings_contentContainer}>
          <Text style={styles.settings_title}>Notifications</Text>

          <View style={styles.settings_itemsConstainer}>
            <View style={styles.settings_itemRow}>
              <View style={styles.settings_items_Text_Icon}>
                <Text style={styles.settings_itemText}>
                  Notifications
                </Text>
              </View>
              <Toggle />
            </View>
          </View>

          <View style={styles.settings_itemsConstainer}>
            <View style={styles.settings_itemRow}>
              <View style={styles.settings_items_Text_Icon}>
                <Text style={styles.settings_itemText}>
                  App Notifications
                </Text>
              </View>
              <Toggle />
            </View>
          </View>
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

export default Notifications
