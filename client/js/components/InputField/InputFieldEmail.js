import React, {useState} from 'react'
import {TextInput, View, Text} from 'react-native'
import styles from './styles'

const InputFieldEmail = ({placeholder}) => {
  const [state, setState] = useState({})

  const validate = text => {
    console.log(text)
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (reg.test(text) === false) {
      console.warn('Email is Not Correct')
      setState({email: text})
      return false
    } else {
      setState({email: text})
      console.warn('Email is Correct')
    }
  }
  return (
    <View style={styles.inputBox}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={text => validate(text)}
        placeholderTextColor="#1E6A62"
      />
    </View>
  )
}

export default InputFieldEmail
