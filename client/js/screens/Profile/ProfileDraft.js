import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {USER_DRAFTS} from '../../context/apollo'
import {useQuery} from '@apollo/react-hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'

const ProfileDraft = ({navigation}) => {
  const {loading, error, data} = useQuery(USER_DRAFTS)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />
  const {drafts} = data.me

  return (
    <FlatList
      data={drafts}
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

export default ProfileDraft
