import React from 'react'
import styles from './styles'
import {View, TouchableOpacity} from 'react-native'
import LeftArrowIcon from '../../../assets/icons/profile/left-arrow.svg'

const LeftArrow = () => (
  <View>
      <LeftArrowIcon fill={'#1E6A62'} width={50} height={32} />
  </View>
)

export default LeftArrow