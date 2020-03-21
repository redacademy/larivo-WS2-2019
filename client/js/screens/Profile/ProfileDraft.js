import React from 'react'
import readingTime from 'reading-time'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {USER_DRAFTS} from '../../context/apollo'
import {useQuery} from '@apollo/react-hooks'
import {trimContent} from '../../utils'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'
import StoryTitle from '../../components/StoryTitle'
import StoryDate from '../../components/StoryDate'
import Paragraph from '../../components/Paragraph/Paragraph'
import styles from './styles'

const ProfileDraft = ({navigation}) => {
  const {loading, error, data} = useQuery(USER_DRAFTS)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />
  const {drafts} = data.me

  return drafts && drafts.length ? (
    <FlatList
      style={styles.profile_stories}
      data={drafts}
      renderItem={({item: {id, title, createdAt, content}}) => {
        const {text: readTime} = readingTime(content)
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('SingleDraft', {id})}
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
      <Text style={styles.no_results_text}>No drafts yet</Text>
    </View>
  )
}

export default ProfileDraft
