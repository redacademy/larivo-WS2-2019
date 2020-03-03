import React from 'react'
import {TouchableOpacity} from 'react-native'
import LeftArrowIcon from '../../../assets/icons/profile/left-arrow.svg'

const LeftArrow = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
      <LeftArrowIcon fill={'#1E6A62'} width={50} height={32} />
  </TouchableOpacity>
)

export default LeftArrow