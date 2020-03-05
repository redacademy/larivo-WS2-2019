import React, {useState} from 'react'
import {
  Modal,
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  TextInput,
} from 'react-native'
import LeftArrow from '../../components/LeftArrow'
import styles from './styles'
import Button from '../../components/Button'
import InputChangePassword from '../../components/InputField/InputChangePassword'
import InputFieldPassword from '../../components/InputField/InputFieldPassword'

// to be changed to settings component
const ChangePassword = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.settings_container}>
        <View style={styles.settings_leftArrow}>
          <LeftArrow onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.settings_contentContainer}>
          <Text style={styles.settings_title}>Change Username</Text>

          <View style={styles.settings_itemsConstainer} />
         
            <View>
              <Text style={styles.setting_changeUserText}>
                Enter Your Existing Password
              </Text>
              <InputChangePassword placeholder={'Existing Password'} />
            </View>

            <View style={{marginTop: 30}}>
              <Text style={styles.setting_changeUserText}>
                Enter Your New Password
              </Text>
              <InputChangePassword placeholder={'New Password'} />
            </View>

        </View>

        <View style={styles.setting_logout}>
          <View style={styles.setting_logoutBtn}>
            <Button theme="dark">SAVE CHANGES</Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ChangePassword
