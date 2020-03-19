import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {getSearchedStories} from '../../hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'

const SearchedStories = ({query}) => {
  const {error, loading, stories} = getSearchedStories(query)
  console.log(stories)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />

  return (
    <View>
      {stories && stories.length ? (
        <FlatList
          data={stories}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                borderBottomColor: '#000',
                borderBottomWidth: 1,
              }}
            >
              <Text>{item.title}</Text>
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
