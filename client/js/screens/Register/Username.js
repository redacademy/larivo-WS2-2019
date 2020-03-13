import React from 'react'
import {Text, View, SafeAreaView} from 'react-native'
import InputFieldEmail from '../../components/InputField/InputFieldEmail'
import Button from '../../components/Button'
import styles from './styles'
import {UserNameForm} from '../../components/UserNameForm'

const Username = ({route, navigation}) => {
  return (
    <SafeAreaView>
      {/* <View style={styles.registerContainer}>
        <Text style={styles.textStyleUsernameScreen}>
          generate your username
        </Text>
        <View style={styles.childContainer}>
          <View style={{paddingVertical: 40}}>
            <InputFieldEmail placeholder={'Roaring Velvet'} />
          </View>
          <View style={styles.btnPaddingUsername}>
            <Button theme="dark">Generate Another Username</Button>
          </View>
          <View style={styles.btnPaddingUsername}>
            <Button
              onPress={() => navigation.navigate('HashtagScreen')}
              theme="light"
            >
              Next
            </Button>
          </View>
        </View>
      </View> */}
      <UserNameForm route={route} navigation={navigation} />
    </SafeAreaView>
  )
}

export default Username
