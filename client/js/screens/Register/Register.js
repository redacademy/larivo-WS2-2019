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
      <Text
        style={{
          fontSize: 35,
          fontWeight: 'bold',
          fontFamily: 'Asap-SemiBold',
          color: '#13443C',
        }}
      >
        enter your deets
      </Text>
      <View
        style={{
          backgroundColor: '#03DAC4',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <View style={{paddingVertical: 40}}>
          <Text
            style={{
              paddingBottom: 20,
              fontFamily: 'SFProText-Light',
              color: '#13443C',
              fontSize: 16,
            }}
          >
            Enter Your Email
          </Text>
          <InputFieldEmail placeholder={'example@gmail.com'} />
        </View>
        <View>
          <Text
            style={{
              paddingBottom: 20,
              fontFamily: 'SFProText-Light',
              color: '#13443C',
              fontSize: 16,
            }}
          >
            Enter Your Password
          </Text>
          <InputFieldPassword placeholder={'Password'} />
        </View>
        <View style={{paddingTop: 60}}>
          <Button theme="light">Next</Button>
        </View>
      </View>
    </View>
  </SafeAreaView>
)

export default Register
