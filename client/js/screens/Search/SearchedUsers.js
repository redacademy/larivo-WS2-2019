import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {getSearchedUsers} from '../../hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'

const SearchedUsers = ({query, navigation, route}) => {
  const {error, loading, users} = getSearchedUsers(query)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />

  return (
    <View>
      {users && users.length ? (
        <FlatList
          data={users}
          renderItem={({item: {id, userName}}) => (
            <TouchableOpacity
              style={{
                borderBottomColor: '#000',
                borderBottomWidth: 1,
              }}
              onPress={() =>
                navigation.navigate(
                  route.name === 'Home'
                    ? 'HomeProfile'
                    : 'BookmarkProfile',
                  {id},
                )
              }
            >
              <Text>{userName}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>No searches found</Text>
      )}
    </View>
  )
}

export default SearchedUsers
