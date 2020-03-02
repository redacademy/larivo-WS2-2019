import React from 'react'
import styles from './styles'
import {SafeAreaView, ScrollView, View, Text} from 'react-native'
import {Card} from '../../components/Card'
import {Header} from '../../components/Header'
import {ProfileTabs} from '../../navigation'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <Text>Header</Text>
      </Header>
      <ScrollView>
        <View style={styles.content}>
          <Card>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
          </Card>
        </View>
      </ScrollView>
      <ProfileTabs />
    </SafeAreaView>
  )
}

export default Home
