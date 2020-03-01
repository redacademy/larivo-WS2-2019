import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native'
import InputFieldEmail from '../components/InputField/InputFieldEmail'
import InputFieldPassword from '../components/InputField/InputFieldPassword'
import Button from '../components/Button'
const Register = () => (
  <SafeAreaView>
    <View
      style={{
        backgroundColor: '#03DAC4',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>enter your deets</Text>
      <View
        style={{
          backgroundColor: '#03DAC4',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <View>
          <Text>Enter Your Email</Text>
          <InputFieldEmail placeholder={'example@gmail.com'} />
        </View>
        <View>
          <Text>Enter Your Password</Text>
          <InputFieldPassword placeholder={'Password'} />
        </View>
        <View>
          <Button theme="light">Next</Button>
        </View>
      </View>
    </View>
  </SafeAreaView>
)

export default Register
