import React from 'react'
import {View, Text, Dimensions, Button} from 'react-native'
import AuthIcon from '../../../assets/icons/network/auth.svg'
import styles from './styles'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const GuestAuth = ({navigation}) => (
  <View style={styles.guestContainer}>
    <AuthIcon width={screenWidth} height={screenHeight / 2} />
    <Text style={styles.guestText}>
      Sign up to access all features and content.
    </Text>
    <Button
      title="Sign Up"
      onPress={() => navigation.navigate('Welcome')}
    />
  </View>
)

export default GuestAuth
