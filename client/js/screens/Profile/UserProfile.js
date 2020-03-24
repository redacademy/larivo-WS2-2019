import React, {useState} from 'react'
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
import LeftArrow from '../../components/LeftArrow/LeftArrow'
import {useFollowUser} from '../../hooks'
import {useAuth} from '../../hooks'
import FollowIcon from '../../../assets/icons/follow_icon.svg'
import FollowingIcon from '../../../assets/icons/following_icon.svg'

const UserProfile = ({route, navigation}) => {
  const {id: userId} = route.params
  const {user: currentUser} = useAuth()
  const [followUser] = useFollowUser()
  const {error, loading, user} = getUserById(userId)
  const [isFollowing, setIsFollowing] = useState(false)

  const handleFollowUser = () => {
    followUser({variables: {id: userId}})
    setIsFollowing(true)
  }

  // const handleUnFollowUser = () => {
  //   unFollowUser({variables: {id: userId}})
  //   setIsFollowing(false)
  // }

  if (loading) return <Spinner />
  if (error) return <NetWorkError />

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backArrow}>
          <LeftArrow onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <NameInitials>{user.userName}</NameInitials>
            <View style={styles.followsContainer}>
              <Text style={styles.numbers}>
                {user.stories.length}
              </Text>
              <Text style={styles.textFollow}>Stories</Text>
            </View>
            <View style={styles.followsContainer}>
              <Text style={styles.numbers}>
                {user.followers.length}
              </Text>
              <Text style={styles.textFollow}>Followers</Text>
            </View>
            <View style={styles.followsContainer}>
              <Text style={styles.numbers}>
                {user.following.length}
              </Text>
              <Text style={styles.textFollow}>Following</Text>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <View style={styles.profile_follow}>
              <StoryTitle>{user.userName}</StoryTitle>
              <TouchableOpacity onPress={handleFollowUser}>
                {isFollowing ? <FollowingIcon /> : <FollowIcon />}
              </TouchableOpacity>
            </View>
          </View>
          <Paragraph>{user.bio || 'lorem'}</Paragraph>
        </View>
      </View>

      {user.stories && user.stories.length ? (
        <FlatList
          data={user.stories}
          style={styles.profile_stories}
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
      )}
    </SafeAreaView>
  )
}

export default UserProfile
