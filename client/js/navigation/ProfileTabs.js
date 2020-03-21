import React from 'react'
import {ScrollView, View} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {
  ProfileStory,
  ProfileDraft,
  ProfileBookMark,
} from '../screens/Profile'

const Tab = createMaterialTopTabNavigator()

const ProfileTabs = () => (
  <Tab.Navigator
    tabBarOptions={{
      showIcon: true,
      tabStyle: {
        height: 45,
        borderBottomWidth: 0.3,
        backgroundColor: '#F1FFFE',
        borderBottomColor: '#1E6A62',
        borderTopWidth: 0,
      },
      indicatorStyle: {backgroundColor: '#1E6A62'},
    }}
  >
    <Tab.Screen
      initialRouteName="ProfileStory"
      name="My Stories"
      component={ProfileStory}
    />
    <Tab.Screen name="My Drafts" component={ProfileDraft} />
    <Tab.Screen name="Bookmarks" component={ProfileBookMark} />
  </Tab.Navigator>
)

export default ProfileTabs
