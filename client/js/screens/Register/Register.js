import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native'
import InputFieldEmail from '../../components/InputField/InputFieldEmail'
import InputFieldPassword from '../../components/InputField/InputFieldPassword'
import Button from '../../components/Button'
import styles from './styles'

const Register = () => (
  <SafeAreaView>
    <View style={styles.registerContainer}>
      <Text style={styles.title}>enter your deets</Text>
      <View style={styles.childContainer}>
        <View style={{paddingVertical: 40}}>
          <Text style={styles.textStyle}>Enter Your Email</Text>
          <InputFieldEmail placeholder={'example@gmail.com'} />
        </View>
        <View>
          <Text style={styles.textStyle}>Enter Your Password</Text>
          <InputFieldPassword placeholder={'Password'} />
        </View>
        <View style={styles.btnPadding}>
          <Button theme="light">Next</Button>
        </View>
      </View>
    </View>
  </SafeAreaView>
)

export default Register
