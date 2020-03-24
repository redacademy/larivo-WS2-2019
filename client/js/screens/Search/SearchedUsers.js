import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {getSearchedUsers} from '../../hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'
import NameInitials from '../../components/NameInitials'
import StoryTitle from '../../components/StoryTitle/index'
import styles from './styles'

const SearchedUsers = ({query, navigation, route}) => {
  const {error, loading, users} = getSearchedUsers(query)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />

  return (
    <View style={styles.container}>
      {users && users.length ? (
        <FlatList
          data={users}
          renderItem={({item: {id, userName}}) => (
            <TouchableOpacity
              style={styles.content}
              onPress={() =>
                navigation.navigate(
                  route.name === 'Home'
                    ? 'HomeProfile'
                    : 'BookmarkProfile',
                  {id},
                )
              }
            >
              <View style={styles.result}>
                <NameInitials>{userName}</NameInitials>
                <View style={styles.title}>
                  <StoryTitle>{userName}</StoryTitle>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <View style={styles.no_results_container}>
          <Text style={styles.no_results_text}>No users found</Text>
        </View>
      )}
    </View>
  )
}

export default SearchedUsers
