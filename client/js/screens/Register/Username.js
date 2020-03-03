import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native'
import InputFieldEmail from '../../components/InputField/InputFieldEmail'
import Button from '../../components/Button'

const Username = () => (
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
          //   width: '80%',
          paddingHorizontal: 20,
          textAlign: 'center',
        }}
      >
        generate your username
      </Text>
      <View
        style={{
          backgroundColor: '#03DAC4',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <View style={{paddingVertical: 40}}>
          <InputFieldEmail placeholder={'Roaring Velvet'} />
        </View>
        <View style={{paddingTop: 10}}>
          <Button theme="dark">Generate Another Username</Button>
        </View>
        <View style={{paddingTop: 10}}>
          <Button theme="light">Next</Button>
        </View>
      </View>
    </View>
  </SafeAreaView>
)

export default Username
