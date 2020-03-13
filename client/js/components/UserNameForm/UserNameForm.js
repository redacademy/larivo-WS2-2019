import React from 'react'
import {SafeAreaView, View, TextInput} from 'react-native'
import {Formik} from 'formik'
import Button from '../Button'

const UserNameForm = ({route, navigation}) => {
  const {email, password} = route.params
  return (
    <Formik initialValues={{userName: ''}}>
      {({handleChange, handleBlur, values, isValid, errors}) => (
        <SafeAreaView>
          <View>
            <TextInput
              onChangeText={handleChange('userName')}
              onBlur={handleBlur('userName')}
              value={values.userName}
              placeholder="Username"
            />
          </View>
          <Button
            disabled={!isValid}
            onPress={() =>
              navigation.navigate('HashtagScreen', {
                email,
                password,
                userName: values.userName,
              })
            }
          >
            Register
          </Button>
        </SafeAreaView>
      )}
    </Formik>
  )
}

export default UserNameForm
