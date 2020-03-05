import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './styles'
import PasswordIcon from '../../../assets/icons/login/icon-password-dark.svg'

const InputFieldPassword = ({placeholder}) => {
  const [hidden, setHidden] = useState(true)

  const showData = () => setHidden(false)
  const hideData = () => setHidden(true)

  return (
    <View style={styles.inputChangePasswordBox}>
      <TextInput
        secureTextEntry={hidden}
        placeholder={placeholder}
        placeholderTextColor="#E6A62"
        style={styles.changePasswordInput}
        inline
      />
      <TouchableOpacity onPressIn={showData} onPressOut={hideData}>
        <PasswordIcon width={22} style={styles.eyeIcon} />
      </TouchableOpacity>
    </View>
  )
}

export default InputFieldPassword
