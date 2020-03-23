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
import {RECOMMENDED_HASHTAGS} from '../../context/apollo'
import {useQuery} from '@apollo/react-hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'
import Button from '../../components/Button'
import styles from './styles'

const HashtagScreen = ({route}) => {
  const {signup} = useAuth()
  const {email, password, userName} = route.params
  const {loading, error, data} = useQuery(RECOMMENDED_HASHTAGS)

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

  if (loading) return <Spinner />
  if (error) return <NetWorkError />

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
                scrollEnabled={false}
                style={{
                  paddingVertical: 10,
                }}
                data={data.recommendedHashtags}
                numColumns="4"
                renderItem={({item}) => (
                  <View style={styles.hashtagsChild}>
                    <TouchableOpacity
                      style={
                        tags.includes(item.name)
                          ? styles.hashtagSelected
                          : styles.hashtagNotSelected
                      }
                      key={item.id}
                      onPress={() => onTagPress(item.name)}
                    >
                      <Text
                        style={
                          tags.includes(item.name)
                            ? styles.hashtagTextSelected
                            : styles.hashtagTextNotSelected
                        }
                      >
                        #{item.name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            </View>
            <View style={styles.btnPaddingUsername}>
              <Button
                theme="dark"
                disabled={tags.length !== 0 ? false : true}
                onPress={handleSignUp}
              >
                Register
              </Button>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Formik>
  )
}
export default HashtagScreen
