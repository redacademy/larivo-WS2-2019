import React, {useState} from 'react'
import styles from './styles'
import readingTime from 'reading-time'
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import {Card} from '../../components/Card'
import {Header} from '../../components/Header'
import Hashtag from '../../components/Hashtag'
import {useAuth} from '../../hooks'
import {USER_FEED} from '../../context/apollo'
import {useQuery} from '@apollo/react-hooks'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'
import {SearchTabs} from '../../navigation'

const Home = ({navigation, route}) => {
  const [search, setSearch] = useState('')
  const {user} = useAuth()
  const {
    loading,
    error,
    data,
    refetch,
    fetchMore,
    networkStatus,
  } = useQuery(USER_FEED)
  console.log(route)

  if (loading) return <Spinner />
  if (error) return <NetWorkError />

  const {userName} = user.user

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        userName={userName}
        search={search}
        setSearch={setSearch}
      />
      {search.length ? (
        <SearchTabs
          route={route}
          navigation={navigation}
          search={search}
        />
      ) : (
        // <ScrollView>
        <FlatList
          ListHeaderComponent={() => (
            <Text style={styles.title}>Featured</Text>
          )}
          // refreshing={networkStatus === 4}
          // onRefresh={() => refetch()}
          // onEndReached={() =>
          //   fetchMore({
          //     updateQuery: (prev, {fetchMoreResult}) => {
          //       if (!fetchMoreResult) return prev
          //       return Object.assign({}, prev, {
          //         userFeed: [
          //           ...prev.userFeed,
          //           ...fetchMoreResult.userFeed,
          //         ],
          //       })
          //     },
          //   })
          // }
          data={data.userFeed}
          renderItem={({
            item: {id, author, title, createdAt, content, hashtags},
          }) => {
            const {text: readTime} = readingTime(content)
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('HomeStory', {id})}
              >
                <Card key={id}>
                  <Text>{author.userName}</Text>
                  <Text>{createdAt}</Text>
                  <Text>{readTime}</Text>
                  <Text>{title}</Text>
                  <Text>{content}</Text>
                  {hashtags.map(tag => (
                    <Hashtag key={tag.id} disabled>
                      {tag.name}
                    </Hashtag>
                  ))}
                </Card>
              </TouchableOpacity>
            )
          }}
          keyExtractor={item => item.id}
        />
        // </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default Home
