import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import readingTime from 'reading-time'
import {USER_STORIES} from '../../context/apollo'
import {useQuery} from '@apollo/react-hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'
import {trimContent} from '../../utils'

const ProfileStory = ({navigation}) => {
  const {loading, error, data} = useQuery(USER_STORIES)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />
  const {stories} = data.me

  return (
    <FlatList
      data={stories}
      renderItem={({item: {id, title, createdAt, content}}) => {
        const {text: readTime} = readingTime(content)
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('SingleStory', {id})}
          >
            <View
              style={{
                borderBottomColor: '#000',
                borderBottomWidth: 1,
              }}
            >
              <Text>{title}</Text>
              <Text>{createdAt}</Text>
              <Text>{readTime}</Text>
              <Text>{trimContent(content)}</Text>
            </View>
          </TouchableOpacity>
        )
      }}
      keyExtractor={item => item.id}
    />
  )
}

export default ProfileStory
