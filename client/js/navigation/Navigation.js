import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import {Login} from '../screens/Login'
import {Register} from '../screens/Register'
import {Home} from '../screens/Home'
import {BookMark} from '../screens/BookMark'
import {StoryForm} from '../screens/StoryForm'
import {Activity} from '../screens/Activity'
import {
  Profile,
  ProfileStory,
  ProfileBookMark,
  ProfileDraft,
  ProfileActivity,
} from '../screens/Profile'
import {Settings, Notifications, DeleteAccount, EditProfile} from '../screens/Settings'

const LoginStack = createStackNavigator()

const LoginStackScreen = () => (
  <LoginStack.Navigator headerMode="none">
    <LoginStack.Screen name="Login" component={Login} />
    <LoginStack.Screen name="Register" component={Register} />
  </LoginStack.Navigator>
)

const HomeStack = createStackNavigator()

const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
)

const BookMarkStack = createStackNavigator()

const BookMarkStackScreen = () => (
  <BookMarkStack.Navigator headerMode="none">
    <BookMarkStack.Screen name="Bookmark" component={BookMark} />
  </BookMarkStack.Navigator>
)

const StoryFormStack = createStackNavigator()

const StoryFormStackScreen = () => (
  <StoryFormStack.Navigator mode="modal" headerMode="none">
    <StoryFormStack.Screen name="StoryForm" component={StoryForm} />
  </StoryFormStack.Navigator>
)

const ActivityStack = createStackNavigator()

const ActivityStackScreen = () => (
  <ActivityStack.Navigator headerMode="none">
    <ActivityStack.Screen name="Activity" component={Activity} />
  </ActivityStack.Navigator>
)

const ProfileStack = createStackNavigator()

const ProfileStackScreen = () => (
  <ProfileStack.Navigator headerMode="none">
    <ProfileStack.Screen name="Profile" component={Profile} />
    <ProfileStack.Screen
      name="ProfileStory"
      component={ProfileStory}
    />
    <ProfileStack.Screen
      name="ProfileBookMark"
      component={ProfileBookMark}
    />
    <ProfileStack.Screen
      name="ProfileDraft"
      component={ProfileDraft}
    />
    <ProfileStack.Screen
      name="ProfileActivity"
      component={ProfileActivity}
    />
      <ProfileStack.Screen
      name="Settings"
      component={Settings}
    />
       <ProfileStack.Screen
      name="Notifications"
      component={Notifications}
    />
      <ProfileStack.Screen
      name="EditProfile"
      component={EditProfile}
    />
      <ProfileStack.Screen
      name="DeleteAccount"
      component={DeleteAccount}
    />
  </ProfileStack.Navigator>
)

const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen
          name="Login"
          component={LoginStackScreen}
          options={{title: 'Login'}}
        />
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{title: 'Home'}}
        />
        <Tab.Screen
          name="Bookmark"
          component={BookMarkStackScreen}
          options={{title: 'Bookmark'}}
        />
        <Tab.Screen
          name="StoryFor "
          component={StoryFormStackScreen}
          options={{title: '+'}}
        />
        <Tab.Screen
          name="Activity"
          component={ActivityStackScreen}
          options={{title: 'Activity'}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{title: 'Profile'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
