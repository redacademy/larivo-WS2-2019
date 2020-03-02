import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {
  ProfileStory,
  ProfileDraft,
  ProfileBookMark,
  ProfileActivity,
} from '../screens/Profile'

const Tab = createMaterialTopTabNavigator()

const ProfileTabs = () => (
  <Tab.Navigator
    tabBarOptions={{
      showIcon: true,
      tabStyle: {
        height: 45,
        borderBottomWidth: 0.3,
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
    <Tab.Screen name="Activities" component={ProfileActivity} />
  </Tab.Navigator>
)

export default ProfileTabs
