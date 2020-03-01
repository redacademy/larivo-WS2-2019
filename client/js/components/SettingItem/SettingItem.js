import React from 'react'
import { Text, SafeAreaView, View } from 'react-native'
import NextIcon from '../../../assets/icons/profile/icon-profile-next.svg'

import styles from './styles'

const SettingItem = ({icon, text}) => {
  let IconV = icon
  return (
    <View style={styles.settings_itemsConstainer}>
      <View style={styles.settings_itemRow}>
        <View style={styles.settings_items_Text_Icon}>
          <IconV fill={'#1E6A62'} width={15} />
          <Text style={styles.settings_itemText}>
            {text}
            </Text>
        </View>
        <NextIcon fill={'#1E6A62'} style={styles.settings_nextIcon} />
      </View>
    </View>
  )
}

export default SettingItem