import React, {useState} from 'react'
import {View, TextInput} from 'react-native'
import styles from './styles'
import NameInitials from '../NameInitials/NameInitials'
import {SearchTabs} from '../../navigation'

const Header = ({userName, navigation, search, setSearch}) => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.searchBox}>
          <NameInitials
            onPress={() => navigation.navigate('Profile')}
          >
            {userName}
          </NameInitials>
          <TextInput
            value={search}
            onChangeText={text => setSearch(text)}
            style={{
              backgroundColor: '#fff',
              borderRadius: 20.5,
              fontSize: 14,
              marginLeft: 15,
              paddingVertical: 10,
              minWidth: 255,
              width: 275,
              paddingLeft: 15,
            }}
            placeholder="Search for topics of interest"
            inline
          />
        </View>
      </View>
    </View>
  )
}

export default Header
