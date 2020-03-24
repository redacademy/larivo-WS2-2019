import React from 'react'
import {Text, SafeAreaView, Button, FlatList, ScrollView, View} from 'react-native'
import {getStoryById} from '../../hooks'
import {useFavoriteStory} from '../../hooks'
import styles from './styles'
import {Spinner} from '../../components/Spinner'
import {NetWorkError} from '../../components/FourOhFour'
import {Card} from '../../components/Card'
import Hashtag from '../../components/Hashtag'

const Story = ({route, navigation}) => {
  const {id: storyId} = route.params
  const [favoriteStory] = useFavoriteStory()
  const {error, loading, story} = getStoryById(storyId)
  console.log(story)

  const handleFavoriteStory = () =>
    favoriteStory({variables: {id: storyId}})

  if (loading) return <Spinner />
  if (error) return <NetWorkError />
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.backIcon} onPress={() => navigation.goBack()}>x</Text>
      <ScrollView>
      <View style={styles.card}>
      
        <View style={styles.bookmarkIcon}>
          <BookmarkIcon />
        </View>
        
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text> 

          <Text style={styles.createdAt}>
          {formatDate(createdAt)}  |  {readTime}</Text>
          <Text style={styles.body} numberOfLines={2}>{content}</Text>
          
          <View style={styles.hashtagContainer}>
            {hashtags.map((hashtag, i)=>{
              if (i < 2){
                return(
                  <CardHashtag key={i}>{hashtag.name}</CardHashtag>
                )}})}
            {hashtags.length > 2 ? 
              // <TouchableOpacity>
                <ContinueIcon fill={'#1E6A62'} 
                style={styles.continueIcon}
                />
              // </TouchableOpacity> 
              : null
            }
          </View>

          <View style={styles.reactionsContainer}>
            <Like style={styles.reactions}/>
            <Heart style={styles.reactions}/>
            <Sad style={styles.reactions}/>
            <Speechless style={styles.reactions}/>
            <Clap style={styles.reactions}/>
            <Text style={styles.body}>{'9999'}</Text>
          </View>

        </View>
      </View>
      {/* <View style={styles.card}>
        <Text style={styles.text}>{story.title}</Text>
        <Text style={styles.text}>{story.createdAt}</Text>
        <Text style={styles.text}>{story.author.userName}</Text>
        <Text style={styles.text}>{story.content}</Text>
        <FlatList
          data={story.hashtags}
          numColumns="4"
          renderItem={({item}) => (
            <Hashtag key={item.id} disabled>
              {item.name}
            </Hashtag>
          )}
          keyExtractor={item => item}
        />
        <Button onPress={handleFavoriteStory} title="Bookmark" />
      </View> */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Story
