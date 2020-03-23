import React, {useState, useEffect} from 'react'
import {TextInput, Text, View, SafeAreaView} from 'react-native'
import Button from '../../components/Button'
import {Formik} from 'formik'
import styles from './styles'
import * as yup from 'yup'
import Spinner from '../../components/Spinner/Spinner'

const Username = ({route, navigation}) => {
  const {email, password} = route.params

  const [fakeUserName, setFakeUsername] = useState()

  const UserNameSchema = yup.object().shape({
    userName: yup.string().required('Username is required'),
  })

  const handleGenerate = () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data =>
        data.results.map(item =>
          setFakeUsername(`${item.name.first} ${item.name.last}`),
        ),
      )
  }

  const handleUserName = values => {
    navigation.navigate('HashtagScreen', {
      email,
      password,
      userName: fakeUserName,
    })
  }

  useEffect(() => {
    fetch('https://randomuser.me/api/')
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
      <Formik
        onSubmit={handleUserName}
        initialValues={{userName: fakeUserName}}
        validationSchema={UserNameSchema}
      >
        {({
          handleChange,
          values,
          handleSubmit,
          errors,
          touched,
          setFieldTouched,
        }) => (
          <View style={styles.registerContainer}>
            <Text style={[styles.title, styles.userName]}>
              generate your username
            </Text>
            <View style={styles.childContainer}>
              <View style={styles.innerChild}>
                <Text style={styles.textStyle}>
                  Enter Your Username
                </Text>
                <View style={styles.inputBox}>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('userName')}
                    onBlur={() => setFieldTouched('userName')}
                    value={fakeUserName}
                    autoCapitalize="none"
                  />
                  {touched.userName && errors.userName && (
                    <Text style={styles.errorText}>
                      {errors.userName}
                    </Text>
                  )}
                </View>
              </View>
              <View style={styles.btnPaddingRegister}>
                <View style={styles.btnGenerate}>
                  <Button onPress={handleGenerate} theme="dark">
                    Generate Another Username
                  </Button>
                </View>
                <Button onPress={handleSubmit} theme="light">
                  Next
                </Button>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  )
}
export default Username
