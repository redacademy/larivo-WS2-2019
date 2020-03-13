import React from 'react'
import styles from './styles'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
} from 'react-native'
import {Card} from '../../components/Card'
import {Header} from '../../components/Header'
import NameInitials from '../../components/NameInitials/NameInitials'
import InputSearchField from '../../components/InputField/InputSearchField'
import getInitials from '../../utils/getInitials'

const Home = ({navigation}) => {
  const data = [
    {id: 1, title: 'title 1', content: 'content 1'},
    {id: 2, title: 'title 2', content: 'content 2'},
    {id: 3, title: 'title 3', content: 'content 3'},
    {id: 4, title: 'title 4', content: 'content 4'},
    {id: 5, title: 'title 5', content: 'content 5'},
    {id: 6, title: 'title 6', content: 'content 6'},
    {id: 7, title: 'title 7', content: 'content 7'},
    {id: 8, title: 'title 8', content: 'content 8'},
    {id: 9, title: 'title 9', content: 'content 9'},
  ]
  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <View style={styles.searchBox}>
          <NameInitials
            onPress={() => navigation.navigate('Profile')}
          >
            {getInitials('Edin Kaymakqi')}
          </NameInitials>
          <InputSearchField placeholder="Search for topics of interest" />
        </View>
      </Header>
      <View
        style={{
          flex: 1,
          paddingVertical: 10,
          backgroundColor: '#03dac4',
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            fontStyle: 'italic',
            paddingVertical: 20,
            paddingLeft: 30,
          }}
        >
          Featured
        </Text>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({item}) => (
            <View style={{marginHorizontal: 30, paddingVertical: 20}}>
              <Card key={item.id}>
                <Text>{item.title}</Text>
                <Text>{item.content}</Text>
              </Card>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
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
    </SafeAreaView>
  )
}

export default Home
