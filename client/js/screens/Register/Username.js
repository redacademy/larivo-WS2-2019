import React from 'react'
import {TextInput, Text, View, SafeAreaView} from 'react-native'
import Button from '../../components/Button'
import {Formik} from 'formik'
import styles from './styles'
import * as yup from 'yup'

const Username = ({route, navigation}) => {
  const {email, password} = route.params

  const UserNameSchema = yup.object().shape({
    userName: yup.string().required('Username is required'),
  })

  const handleUserName = values => {
    navigation.navigate('HashtagScreen', {
      email,
      password,
      userName: values.userName,
    })
  }

  return (
    <SafeAreaView>
      <Formik
        onSubmit={handleUserName}
        initialValues={{userName: ''}}
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
            <Text style={styles.title}>enter your username</Text>
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
                    value={values.userName}
                    autoCapitalize="none"
                    placeholder="Roaring Velvet"
                  />
                  {touched.userName && errors.userName && (
                    <Text style={styles.errorText}>
                      {errors.userName}
                    </Text>
                  )}
                </View>
              </View>
              <View style={styles.btnPaddingRegister}>
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
