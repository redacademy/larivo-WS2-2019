import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {SearchedUsers, SearchedStories} from '../screens/Search'

const Tab = createMaterialTopTabNavigator()

const SearchTabs = ({search, navigation, route}) => (
  <Tab.Navigator
    initialRouteName="Account"
    tabBarOptions={{
      showIcon: true,
      tabStyle: {
        height: 45,
        backgroundColor: '#F1FFFE',
        borderBottomWidth: 0.3,
        borderBottomColor: '#1E6A62',
        borderTopWidth: 0,
      },
      indicatorStyle: {backgroundColor: '#1E6A62'},
    }}
  >
    <Tab.Screen name="Account">
      {() => (
        <SearchedUsers
          query={search}
          navigation={navigation}
          route={route}
        />
      )}
    </Tab.Screen>
    <Tab.Screen name="Stories">
      {() => (
        <SearchedStories
          query={search}
          navigation={navigation}
          route={route}
        />
      )}
    </Tab.Screen>
  </Tab.Navigator>
)

export default SearchTabs
