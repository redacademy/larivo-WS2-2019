import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {getSearchedStories} from '../../hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'

const SearchedStories = ({query, navigation, route}) => {
  const {error, loading, stories} = getSearchedStories(query)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />

  return (
    <View>
      {stories && stories.length ? (
        <FlatList
          data={stories}
          renderItem={({item: {id, title}}) => (
            <TouchableOpacity
              style={{
                borderBottomColor: '#000',
                borderBottomWidth: 1,
              }}
              onPress={() =>
                navigation.navigate(
                  route.name === 'Home'
                    ? 'HomeStory'
                    : 'BookmarkStory',
                  {id},
                )
              }
            >
              <Text>{title}</Text>
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

export default SearchedStories
