import React, {useState} from 'react'
import {TextInput, Text, View, SafeAreaView} from 'react-native'
import {Formik} from 'formik'
import Button from '../../components/Button'
import styles from './styles'
import * as yup from 'yup'

const Register = ({navigation}) => {
  const [textEntry, setTextEntry] = useState(true)
  const RegisterSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invaild email')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
  })

  const handleRegister = values => {
    navigation.navigate('Username', {
      email: values.email,
      password: values.password,
    })
  }

  return (
    <SafeAreaView>
      <Formik
        onSubmit={handleRegister}
        initialValues={{email: '', password: ''}}
        validationSchema={RegisterSchema}
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
            <Text style={styles.title}>enter your deets</Text>
            <View style={styles.childContainer}>
              <View style={styles.innerChild}>
                <Text style={styles.textStyle}>Enter Your Email</Text>
                <View style={styles.inputBox}>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                    value={values.email}
                    autoCapitalize="none"
                    placeholder="example@gmail.com"
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.errorText}>
                      {errors.email}
                    </Text>
                  )}
                </View>
              </View>
              <View>
                <Text style={styles.textStyle}>
                  Enter Your Password
                </Text>
                <TextInput
                  secureTextEntry={true}
                  autoCapitalize="none"
                  style={styles.input}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('email')}
                  value={values.password}
                  placeholder="password"
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>
                    {errors.password}
                  </Text>
                )}
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

export default Register
