import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {USER_STORIES} from '../../context/apollo'
import {useQuery} from '@apollo/react-hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'

const ProfileStory = ({navigation}) => {
  const {loading, error, data} = useQuery(USER_STORIES)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />
  const {stories} = data.me

  return (
    <FlatList
      data={stories}
      renderItem={({item: {id, title, createdAt, content}}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeStory', {id})}
        >
          <View
            style={{
              borderBottomColor: '#000',
              borderBottomWidth: 1,
            }}
          >
            <Text>{title}</Text>
            <Text>{createdAt}</Text>
            <Text>{content}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
  )
}

export default ProfileStory
