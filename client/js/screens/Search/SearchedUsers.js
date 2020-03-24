import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {getSearchedUsers} from '../../hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'
import NameInitials from '../../components/NameInitials'
import StoryTitle from '../../components/StoryTitle/index'

const SearchedUsers = ({query, navigation, route}) => {
  const {error, loading, users} = getSearchedUsers(query)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />

  return (
    <View style={{flex: 1, backgroundColor: '#F1FFFE'}}>
      {users && users.length ? (
        <FlatList
          data={users}
          renderItem={({item: {id, userName}}) => (
            <TouchableOpacity
              style={{
                backgroundColor: '#F1FFFE',
                borderBottomColor: '#1E6A62',
                borderBottomWidth: 0.5,
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
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 20,
                  paddingHorizontal: 20,
                }}
              >
                <NameInitials>{userName}</NameInitials>
                <View style={{paddingLeft: 20}}>
                  <StoryTitle>{userName}</StoryTitle>
                </View>
              </View>
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
