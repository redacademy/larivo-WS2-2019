import React, {useState} from 'react'
import {SafeAreaView, View, TextInput} from 'react-native'
import {Formik} from 'formik'
import {validateInputs} from './utils'
import Button from '../Button'

const SignUpForm = ({navigation}) => {
  const [textEntry, setTextEntry] = useState(true)

  const onPassPress = () => {
    setTextEntry(!textEntry)
  }
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validate={validateInputs}
    >
      {({handleChange, handleBlur, values, isValid, errors}) => (
        <SafeAreaView>
          <View>
            <TextInput
              onChangeText={handleChange('email')}
              autoCapitalize={false}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
            />
          </View>
          <View>
            <TextInput
              secureTextEntry={textEntry}
              autoCapitalize={false}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
            />
            <Button
              disabled={isValid}
              onPress={() =>
                navigation.navigate('Username', {
                  email: values.email,
                  password: values.password,
                })
              }
            >
              Register
            </Button>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  )
}

export default SignUpForm
