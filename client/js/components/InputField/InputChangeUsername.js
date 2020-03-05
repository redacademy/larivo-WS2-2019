import React from 'react'
import {View, TextInput} from 'react-native'
import styles from './styles'

const InputChangeUsername = ({placeholder}) => {
  return (
    <>
    <View style={styles.changeUserInputView}>
      <TextInput
        placeholder={placeholder}
        style={styles.changeUserInput}
        inline
      />
      </View>
    </>
  )
}

export default InputChangeUsername
