import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import NameInitials from '../NameInitials/NameInitials'
import InputSearchField from '../InputField/InputSearchField'

const userName = "Roaring Velvet"

const Header = ({ children }) => {
  return <View style={styles.header}>

    <View style={styles.searchBox}>
      <NameInitials
        onPress={() => navigation.navigate('Profile')}
      >
        {userName}
        </NameInitials>
      <InputSearchField placeholder="Search for topics of interest" />
    </View>

  </View>
}

export default Header
