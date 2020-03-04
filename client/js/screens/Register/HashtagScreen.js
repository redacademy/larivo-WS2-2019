import React from 'react'
import {Text, View, SafeAreaView} from 'react-native'
import Button from '../../components/Button'
import styles from './styles'
import Hashtag from '../../components/Hashtag/Hashtag'

const HashtagScreen = ({navigation}) => (
  <SafeAreaView>
    <View style={styles.hashtagContainer}>
      <Text style={styles.textStyleUsernameScreen}>
        choose hashtags
      </Text>
      <Text style={styles.textStyleHashtagsScreen}>
        These hashtags are used to curate your content.
      </Text>
      <View style={styles.childContainer}>
        <View style={styles.hashtagsWrap}>
          <Hashtag>Anxiety</Hashtag>
          <Hashtag>Happy</Hashtag>
          <Hashtag>MentalHealth</Hashtag>
          <Hashtag>Abuse</Hashtag>
          <Hashtag>Anxiety</Hashtag>
          <Hashtag>Anxiety</Hashtag>
          <Hashtag>Anxiety</Hashtag>
          <Hashtag>Anxiety</Hashtag>
          <Hashtag>Anxiety</Hashtag>
          <Hashtag>Anxiety</Hashtag>
        </View>
        <View style={styles.btnPaddingUsername}>
          <Button
            onPress={() => navigation.navigate('Tabs')}
            theme="light"
          >
            Next
          </Button>
        </View>
        <View style={styles.btnPaddingUsername}>
          <Button
            onPress={() => navigation.navigate('Tabs')}
            theme="dark"
          >
            Skip For Now
          </Button>
        </View>
      </View>
    </View>
  </SafeAreaView>
)

export default HashtagScreen
