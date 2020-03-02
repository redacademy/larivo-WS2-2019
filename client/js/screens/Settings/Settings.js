import React, {useState} from 'react'
import {
  Modal,
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
} from 'react-native'
import LeftArrow from '../../components/LeftArrow'
import BellIcon from '../../../assets/icons/profile/icon-profile-bell.svg'
import UserIcon from '../../../assets/icons/profile/icon-profile-user.svg'
import DeleteIcon from '../../../assets/icons/profile/icon-profile-delete.svg'
import SettingItem from '../../components/SettingItem'
import Notifications from './Notifications'
import EditProfile from './EditProfile'
import DeleteAccount from './DeleteAccount'

import styles from './styles'
const items = [
  {
    id: 1,
    icon: BellIcon,
    text: 'Notifications',
  },
  {
    id: 2,
    icon: UserIcon,
    text: 'Edit Profile',
  },
  {
    id: 3,
    icon: DeleteIcon,
    text: 'Delete Account',
  },
]

const ModalContent = ({modal, id}) => {
  if (id === 1) {
    return <Notifications modal={modal} />
  }
  if (id === 2) {
    return <EditProfile modal={modal} />
  }
  if (id === 3) {
    return <DeleteAccount modal={modal} />
  }
}

const Settings = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalId, setModalId] = useState(0)

  return (
    <SafeAreaView>
      <Modal animationType="slide" visible={openModal}>
        <ModalContent id={modalId} modal={setOpenModal} />
      </Modal>

      <View style={styles.settings_container}>
        <View style={styles.settings_leftArrow}>
          <LeftArrow />
        </View>
        <View style={styles.settings_contentContainer}>
          <Text style={styles.settings_title}>Setting</Text>

          {items.map(item => {
            return (
              <View style={styles.settings_itemsConstainer}>
                <TouchableOpacity
                  style={{width: '100%'}}
                  onPress={() => {
                    setOpenModal(true)
                    setModalId(item.id)
                  }}
                >
                  <SettingItem icon={item.icon} text={item.text} />
                </TouchableOpacity>
              </View>
            )
          })}
          <View style={styles.settings_itemsConstainer} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Settings
