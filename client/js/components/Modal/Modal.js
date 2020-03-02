import React from 'react'
import {
  Modal as NativeModal,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native'

const Modal = ({children, open = 'true', onClose}) => {
  return (
    <NativeModal
      animationType="slide"
      transparent={false}
      visible={open}
    >
      <View style={{flex: 1, marginTop: 50}}>
        <TouchableOpacity onPress={onClose}>
          <Text>x</Text>
        </TouchableOpacity>
        <ScrollView>
          <View>{children}</View>
        </ScrollView>
      </View>
    </NativeModal>
  )
}
export default Modal
