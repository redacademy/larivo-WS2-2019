import React from 'react'
import {Text, SafeAreaView, View} from 'react-native'
import LeftArrow from '../../components/LeftArrow'
import styles from './styles'
import Button from '../../components/Button'
import {useAuth} from '../../hooks'
import {useDeleteUser} from '../../hooks'

const DeleteAccount = ({navigation, route}) => {
  const {user} = useAuth()
  const [deleteUser] = useDeleteUser()

  const handleDeleteUser = () => {
    deleteUser({
      variables: {
        email: user.user.email,
      },
    })
  }
  return (
    <SafeAreaView>
      <View style={styles.settings_container}>
        <View style={styles.settings_leftArrow}>
          <LeftArrow onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.settings_contentContainer}>
          <Text style={styles.settings_title}>Delete Account</Text>

          <View style={styles.settings_itemsConstainer} />

          <Text style={styles.setting_delText}>
            Deleting your account will remove all stories, activity,
            and data. This cannot be undone.
          </Text>
        </View>

        <View style={styles.setting_logout}>
          <View style={styles.setting_logoutBtn}>
            <Button onPress={handleDeleteUser} theme="dark">
              DELETE
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default DeleteAccount
