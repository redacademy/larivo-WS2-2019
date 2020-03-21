import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import readingTime from 'reading-time'
import {USER_BOOKMARKS} from '../../context/apollo'
import {useQuery} from '@apollo/react-hooks'
import {Spinner} from '../../components/Spinner'
import {trimContent} from '../../utils'
import {NetWorkError} from '../../components/FourOhFour'
import StoryTitle from '../../components/StoryTitle'
import StoryDate from '../../components/StoryDate'
import Paragraph from '../../components/Paragraph/Paragraph'
import styles from './styles'

const ProfileBookMark = ({navigation}) => {
  const {loading, error, data} = useQuery(USER_BOOKMARKS)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />
  const {favoriteStories} = data.me
  console.log(favoriteStories)

  return favoriteStories && favoriteStories.length ? (
    <FlatList
      data={favoriteStories}
      style={styles.profile_stories}
      renderItem={({item: {id, title, createdAt, content}}) => {
        const {text: readTime} = readingTime(content)
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SingleBookMark', {id})
            }
          >
            <View style={styles.profile_lists}>
              <StoryTitle>{title}</StoryTitle>
              <StoryDate>
                {createdAt} | {readTime}
              </StoryDate>
              <Paragraph>{trimContent(content)}</Paragraph>
            </View>
          </TouchableOpacity>
        )
      }}
      keyExtractor={item => item.id}
    />
  ) : (
    <View style={styles.no_results_container}>
      <Text style={styles.no_results_text}>No bookmarks yet</Text>
    </View>
  )
}

export default ProfileBookMark
