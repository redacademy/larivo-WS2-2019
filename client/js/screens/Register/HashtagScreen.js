import React, {useState} from 'react'
import {Formik} from 'formik'
import {useAuth} from '../../hooks'
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import Button from '../../components/Button'
import styles from './styles'

const HashtagScreen = ({route, navigation}) => {
  const {signup} = useAuth()
  const {email, password, userName} = route.params
  const data = [
    {id: 1, name: 'happiness'},
    {id: 2, name: 'anxiety'},
    {id: 3, name: 'depression'},
    {id: 4, name: 'sadness'},
  ]
  const [tags, setTags] = useState([])
  const onTagPress = tag => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag])
    } else {
      const i = tags.indexOf(tag)
      if (i !== -1) {
        const updatedTags = [...tags]
        updatedTags.splice(i, 1)
        setTags(updatedTags)
      }
    }
  }
  const handleSignUp = () => {
    signup({
      variables: {
        email,
        password,
        userName,
        hashtags: tags,
      },
    })
  }

  console.log(userName, password, email, tags)

  return (
    <Formik>
      <SafeAreaView>
        <View style={styles.hashtagContainer}>
          <Text style={styles.textStyleUsernameScreen}>
            choose hashtags
          </Text>
          <Text style={styles.textStyleHashtagsScreen}>
            These hashtags are used to curate your content.
          </Text>
          <View style={styles.childContainer}>
            <View style={styles.hashtagsWrap}>
              <FlatList
                data={data}
                numColumns="4"
                renderItem={({item}) => (
                  <View style={{padding: 20}}>
                    <TouchableOpacity
                      onPress={() => onTagPress(item.name)}
                    >
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            </View>
            <View style={styles.btnPaddingUsername}>
              <Button
                disabled={tags.length !== 0 ? false : true}
                onPress={handleSignUp}
              >
                Register
              </Button>
            </View>
            <View style={styles.btnPaddingUsername} />
          </View>
        </View>
      </SafeAreaView>
    </Formik>
  )
}
export default HashtagScreen
