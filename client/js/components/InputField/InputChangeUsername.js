import React from 'react'
import {View, TextInput} from 'react-native'
import styles from './styles'

const InputChangeUsername = ({placeholder, value}) => {
  return (
    <>
      <View style={styles.changeUserInputView}>
        <TextInput
          placeholder={placeholder}
          style={styles.changeUserInput}
          inline
          value={value}
        />
      </View>
    </>
  )
}

export default InputChangeUsername
