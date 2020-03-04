import React, {useState} from 'react'
import {
  Modal,
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  TextInput
} from 'react-native'
import LeftArrow from '../../components/LeftArrow'
import styles from './styles'
import Button from '../../components/Button'
import InputChangeUsername from '../../components/InputField/InputChangeUsername'

// to be changed to settings component
const ChangeUsername = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.settings_container}>
        <View style={styles.settings_leftArrow}>
        <LeftArrow onPress={() => navigation.goBack()}/>
        </View>
        <View style={styles.settings_contentContainer}>
          <Text style={styles.settings_title}>
            Change Username
          </Text>

          <View style={styles.settings_itemsConstainer} />

          <Text style={styles.setting_changeUserText}>
            Existing stories will be stored under your new username. 
          </Text>
        </View>
        <InputChangeUsername placeholder={'example@gmail.com'} />

        <View style={styles.setting_logout}>
          <View style={styles.setting_logoutBtn}>
        <Button theme="light" >Get New Username</Button>
        </View>
        </View> 

        <View style={styles.setting_logout}>
          <View style={styles.setting_logoutBtn}>
          <Button theme="dark" >SAVE CHANGES</Button>
          </View>
        </View> 
      </View>
    </SafeAreaView>
  )
}

export default ChangeUsername
