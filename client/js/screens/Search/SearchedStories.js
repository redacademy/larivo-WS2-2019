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
import styles from './styles'

const SearchedStories = ({query, navigation, route}) => {
  const {error, loading, stories} = getSearchedStories(query)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />

  return (
    <View style={styles.container}>
      {stories && stories.length ? (
        <FlatList
          data={stories}
          renderItem={({
            item: {id, createdAt, author, title, content, hashtags},
          }) => {
            const {text: readTime} = readingTime(content)
            return (
              <TouchableOpacity
                style={styles.content}
                onPress={() =>
                  navigation.navigate(
                    route.name === 'Home'
                      ? 'HomeStory'
                      : 'BookmarkStory',
                    {id},
                  )
                }
              >
                <View style={styles.resultWrapper}>
                  <View style={styles.storyResult}>
                    <NameInitials>{author.userName}</NameInitials>
                    <View style={styles.title}>
                      <StoryTitle>{title}</StoryTitle>
                    </View>
                  </View>
                  <StoryDate>
                    {createdAt} | {readTime}
                  </StoryDate>
                  <Paragraph>{trimContent(content)}</Paragraph>
                  <FlatList
                    style={styles.hashtags}
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
        <View style={styles.no_results_container}>
          <Text style={styles.no_results_text}>No stories found</Text>
        </View>
      )}
    </View>
  )
}

export default SearchedStories
