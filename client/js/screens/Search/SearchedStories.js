import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {getSearchedStories} from '../../hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'
import readingTime from 'reading-time'
import Hashtag from '../../components/Hashtag'
import NameInitials from '../../components/NameInitials/index'
import StoryTitle from '../../components/StoryTitle/index'
import StoryDate from '../../components/StoryDate/StoryDate'
import Paragraph from '../../components/Paragraph/Paragraph'
import trimContent from '../../utils/trimContent'

const SearchedStories = ({query, navigation, route}) => {
  const {error, loading, stories} = getSearchedStories(query)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />
  console.log(stories[0].author.name)

  return (
    <View style={{flex: 1, backgroundColor: '#F1FFFE'}}>
      {stories && stories.length ? (
        <FlatList
          data={stories}
          renderItem={({
            item: {id, createdAt, author, title, content, hashtags},
          }) => {
            const {text: readTime} = readingTime(content)
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: '#F1FFFE',
                  borderBottomColor: '#1E6A62',
                  borderBottomWidth: 0.5,
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
                <View
                  style={{
                    paddingVertical: 20,
                    paddingHorizontal: 20,
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: 15,
                    }}
                  >
                    <NameInitials>{author.userName}</NameInitials>
                    <View style={{paddingLeft: 20}}>
                      <StoryTitle>{title}</StoryTitle>
                    </View>
                  </View>
                  <StoryDate>
                    {createdAt} | {readTime}
                  </StoryDate>
                  <Paragraph>{trimContent(content)}</Paragraph>
                  <FlatList
                    style={{paddingVertical: 10}}
                    scrollEnabled={false}
                    data={hashtags}
                    numColumns={4}
                    renderItem={({item}) => (
                      <Hashtag disabled key={item.id}>
                        {item.name}
                      </Hashtag>
                    )}
                    keyExtractor={item => item.id}
                  />
                </View>
              </TouchableOpacity>
            )
          }}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>No searches found</Text>
      )}
    </View>
  )
}

export default SearchedStories
