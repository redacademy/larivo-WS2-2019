import React from 'react'
import {View, TextInput} from 'react-native'
import styles from './styles'
import MagGlassIcon from '../../../assets/icons/login/icon-magnifying_glass.svg'

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
      <MagGlassIcon style={styles.searchInputIcon} />
    </>
  )
}

export default InputChangeUsername
