import React from 'react'
import {View, TextInput} from 'react-native'
import styles from './styles'
import MagGlassIcon from '../../../assets/icons/login/icon-magnifying_glass.svg'

const InputSearchField = ({placeholder}) => {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        style={styles.searchInput}
        inline
      />
      <MagGlassIcon style={styles.searchInputIcon} />
    </>
  )
}

export default InputSearchField
