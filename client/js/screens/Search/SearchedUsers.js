import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {getSearchedUsers} from '../../hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'

const SearchedUsers = ({query}) => {
  const {error, loading, users} = getSearchedUsers(query)
  console.log(users)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />

  return (
    <View>
      {users && users.length ? (
        <FlatList
          data={users}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                borderBottomColor: '#000',
                borderBottomWidth: 1,
              }}
            >
              <Text>{item.userName}</Text>
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
