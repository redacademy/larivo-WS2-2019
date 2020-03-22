import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import readingTime from 'reading-time'
import {USER_STORIES} from '../../context/apollo'
import {useQuery} from '@apollo/react-hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'
import {trimContent} from '../../utils'
import styles from './styles'
import StoryTitle from '../../components/StoryTitle'
import StoryDate from '../../components/StoryDate'
import Paragraph from '../../components/Paragraph/Paragraph'

const ProfileStory = ({navigation}) => {
  const {loading, error, data} = useQuery(USER_STORIES)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />
  const {stories} = data.me

  return stories && stories.length ? (
    <FlatList
      style={styles.profile_stories}
      data={stories}
      renderItem={({item: {id, title, createdAt, content}}) => {
        const {text: readTime} = readingTime(content)
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('SingleStory', {id})}
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
      <Text style={styles.no_results_text}>No stories yet</Text>
    </View>
  )
}

export default ProfileStory
