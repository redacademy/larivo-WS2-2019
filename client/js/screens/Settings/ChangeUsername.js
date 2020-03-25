import React, {useState, useEffect} from 'react'
import {Text, SafeAreaView, View} from 'react-native'
import {useUpdateUserName} from '../../hooks'
import LeftArrow from '../../components/LeftArrow'
import styles from './styles'
import Button from '../../components/Button'
import InputChangeUsername from '../../components/InputField/InputChangeUsername'
import Spinner from '../../components/Spinner/Spinner'
import Popup from '../../components/Popup/Popup'

const ChangeUsername = ({navigation}) => {
  const [fakeUserName, setFakeUsername] = useState()
  const [show, setShow] = useState(false)

  const [updateUserName] = useUpdateUserName()

  const handleSubmit = () => {
    updateUserName({
      variables: {
        userName: fakeUserName,
      },
    })
    setShow(true)
    setTimeout(() => {
      setShow(false)
      navigation.navigate('Profile')
    }, 1500)
  }

  const handleGenerate = () => {
    fetch('https://randomuser.me/api/?nat=us,dk,fr,gb')
      .then(response => response.json())
      .then(data =>
        data.results.map(item =>
          setFakeUsername(`${item.name.first} ${item.name.last}`),
        ),
      )
  }

  useEffect(() => {
    fetch('https://randomuser.me/api/?nat=us,dk,fr,gb')
      .then(response => response.json())
      .then(data =>
        data.results.map(item =>
          setFakeUsername(`${item.name.first} ${item.name.last}`),
        ),
      )
  }, [])

  return !fakeUserName ? (
    <Spinner />
  ) : (
    <SafeAreaView>
      <View style={styles.settings_container}>
        <View style={styles.settings_leftArrow}>
          <LeftArrow onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.settings_contentContainer}>
          <Text style={styles.settings_title}>Change Username</Text>

          <View style={styles.settings_itemsConstainer} />

          <Text style={styles.setting_changeUserText}>
            Existing stories will be stored under your new username.
          </Text>
        </View>
        <InputChangeUsername
          value={fakeUserName}
          placeholder={'Gabe and Dimitri'}
        />

        <View style={styles.setting_logout}>
          <View style={styles.setting_logoutBtn}>
            <Button onPress={handleGenerate} theme="light">
              Get New Username
            </Button>
          </View>
        </View>

        <View style={styles.setting_logout}>
          <View style={styles.setting_logoutBtn}>
            <Button onPress={handleSubmit} theme="dark">
              SAVE CHANGES
            </Button>
          </View>
        </View>
      </View>
      <Popup text="Success!" show={show} />
    </SafeAreaView>
  )
}

export default ChangeUsername
