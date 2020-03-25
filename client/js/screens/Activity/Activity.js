import React from 'react'
import styles from './styles'
import {SafeAreaView, View, FlatList, Text} from 'react-native'
import StoryTitle from '../../components/StoryTitle'
import Paragraph from '../../components/Paragraph'
import Hashtag from '../../components/Hashtag'
import StoryDate from '../../components/StoryDate'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Conference Room 5 Minutes',
    content:
      "Who's the best regional manager in Dunder Mifflin history? Who has the…",
    time: 'NOV. 12TH 2019 | DEC. 12TH 2019 | 3 PM',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6n',
    title: 'Michael Scott',
    time: 'March 11th | 6:30 am',
    content:
      "I'm heartless. And I'm back to my ways 'cause I'm heartless. All this…",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'McLovin Fogell',
    content:
      'I felt as if I was going insane. I was dizzy, hot, my head felt light and my…',
    time: 'March 18th | 10:30 am',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'McLoving Fogell',
    time: 'March 18th | 12:30 am',
    content:
      "Who's the best regional manager in Dunder Mifflin history? Who has the…",
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Freddy Krueger',
    time: 'March 10th | 9:30 am',
    content:
      "I'm heartless. And I'm back to my ways 'cause I'm heartless. All this…",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'Do It! Just Do It!',
    time: 'NOV. 12TH 2019 | 05:30 MIN. VIDEO',
    content:
      'There are two kinds of people in the world: those who’ve already seen the hilarious…',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f60',
    title: 'ADHD Christmas Party',
    time: 'NOV. 12TH 2019 | DEC. 25TH 2019 | 6:30 PM',
    content:
      'Have yourself a merry little holiday and invite all your friends to join you…',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7d',
    title: 'Ken Jeong',
    content:
      'I felt as if I was going insane. I was dizzy, hot, my head felt light and my…',
    time: 'March 18th | 10:30 am',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d70',
    title: 'Wade Wilson: Dealing With Psychosis ',
    content:
      "I'm heartless. And I'm back to my ways 'cause I'm heartless. All this…",
    time: 'DEC. 3RD 2019 | 32:45 MIN. AUDIO | EXPLICIT',
  },
]

const Activity = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        ListHeaderComponent={() => (
          <Text style={styles.title}>Resources</Text>
        )}
        data={DATA}
        renderItem={({item}) => (
          <View style={styles.list_item}>
            <StoryTitle>{item.title}</StoryTitle>
            <StoryDate>{item.time}</StoryDate>
            {item.content ? (
              <Paragraph numberOfLines={3}>{item.content}</Paragraph>
            ) : null}
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default Activity
