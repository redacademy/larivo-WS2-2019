import React from 'react'
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import readingTime from 'reading-time'
import {getUserById} from '../../hooks'
import {Spinner} from '../../components/Spinner'
import {trimContent} from '../../utils'
import {NetWorkError} from '../../components/FourOhFour'
import styles from './styles'
import NameInitials from '../../components/NameInitials/NameInitials'
import StoryTitle from '../../components/StoryTitle'
import Paragraph from '../../components/Paragraph/Paragraph'
import StoryDate from '../../components/StoryDate/StoryDate'

const UserProfile = ({route, navigation}) => {
  const {id: userId} = route.params
  const {error, loading, user} = getUserById(userId)
  console.log(user)
  if (loading) return <Spinner />
  if (error) return <NetWorkError />

  return (
    <SafeAreaView>
      <Text onPress={() => navigation.goBack()}>x</Text>
      <SafeAreaView style={styles.header}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <NameInitials>{user.userName}</NameInitials>
            <View style={styles.followsContainer}>
              <Text style={styles.numbers}>53</Text>
              <Text style={styles.textFollow}>Stories</Text>
            </View>
            <View style={styles.followsContainer}>
              <Text style={styles.numbers}>64.5K</Text>
              <Text style={styles.textFollow}>Followers</Text>
            </View>
            <View style={styles.followsContainer}>
              <Text style={styles.numbers}>1247</Text>
              <Text style={styles.textFollow}>Following</Text>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <StoryTitle>{user.userName}</StoryTitle>
          </View>
          <Paragraph>{user.bio || 'lorem'}</Paragraph>
        </View>
      </SafeAreaView>

      {user.stories && user.stories.length ? (
        <FlatList
          data={user.stories}
          renderItem={({item: {id, title, createdAt, content}}) => {
            const {text: readTime} = readingTime(content)
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    route.name === 'HomeProfile'
                      ? 'HomeStory'
                      : 'BookmarkStory',
                    {id},
                  )
                }
              >
                <View
                  style={{
                    borderBottomColor: '#000',
                    borderBottomWidth: 1,
                  }}
                >
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
        <Text>no stories</Text>
      )}
    </SafeAreaView>
  )
}

export default UserProfile
