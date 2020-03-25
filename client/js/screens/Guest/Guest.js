import React from 'react'
import styles from './styles'
import readingTime from 'reading-time'
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native'
import {StoryCard} from '../../components/StoryCard'
import {GUEST_FEED} from '../../context/apollo'
import {useQuery} from '@apollo/react-hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'

const Guest = ({navigation}) => {
  const {loading, error, data} = useQuery(GUEST_FEED)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />
  console.log(data.guestFeed)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.guestFeed}
        renderItem={({
          item: {id, author, title, createdAt, content, hashtags},
        }) => {
          const {text: readTime} = readingTime(content)
          return (
            <View>
              <TouchableOpacity
                style={styles.cardContainer}
                onPress={() =>
                  navigation.navigate('GuestStory', {id})
                }
              >
                <StoryCard
                  userName={author.userName}
                  createdAt={createdAt}
                  readTime={readTime}
                  title={title}
                  content={content}
                  hashtags={hashtags}
                  bookmarked={false}
                />
              </TouchableOpacity>
            </View>
          )
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default Guest
