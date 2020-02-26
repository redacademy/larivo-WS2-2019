import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'

const styles = {
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: 214,
    borderRadius: 20.75,
    backgroundColor: '#F1FFFE',
    boxShadow: '2px 2px 5px 0 rgba(0,0,0,0.25)',
    marginTop: 25
  },
  text: {
    fontSize: 16,
    color: '#13443C',
    fontWeight: '300',
  }
}

const LoginButton = ({ text }) => (
  <>
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        alert(text)
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  </>
)
export default LoginButton

