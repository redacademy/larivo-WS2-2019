import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './styles'
import PasswordIcon from '../../../assets/icons/login/icon-password-dark.svg'

const InputFieldPassword = ({placeholder}) => {
  const [hidden, setHidden] = useState(true)

  const showData = () => setHidden(false)
  const hideData = () => setHidden(true)

  return (
    <View style={styles.inputBox}>
      <TextInput
        secureTextEntry={hidden}
        placeholder={placeholder}
        style={styles.input}
        inline
      />
      <TouchableOpacity onPressIn={showData} onPressOut={hideData}>
        <PasswordIcon style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  )
}

export default InputFieldPassword
