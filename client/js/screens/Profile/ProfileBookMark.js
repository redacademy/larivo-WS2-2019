import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import readingTime from 'reading-time'
import {USER_BOOKMARKS} from '../../context/apollo'
import {useQuery} from '@apollo/react-hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'

const ProfileBookMark = ({navigation}) => {
  const {loading, error, data} = useQuery(USER_BOOKMARKS)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />
  const {favoriteStories} = data.me
  console.log(favoriteStories)

  return (
    <FlatList
      data={favoriteStories}
      renderItem={({item: {id, title, createdAt, content}}) => {
        const {text: readTime} = readingTime(content)
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SingleBookMark', {id})
            }
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
              <Text>{content}</Text>
            </View>
          </TouchableOpacity>
        )
      }}
      keyExtractor={item => item.id}
    />
  )
}

export default ProfileBookMark
