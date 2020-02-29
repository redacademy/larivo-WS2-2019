import React, {useState} from 'react'
import {TextInput, View, Text} from 'react-native'
import styles from './styles'

const InputFieldEmail = ({placeholder}) => {
  validate = text => {
    console.log(text)
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (reg.test(text) === false) {
      console.log('Email is Not Correct')
      this.setState({email: text})
      return false
    } else {
      this.setState({email: text})
      console.log('Email is Correct')
    }
  }
  return (
    <View style={styles.inputBox}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        inline
        onChangeText={text => this.validate(text)}
      />
    </View>
  )
}

export default InputFieldEmail
