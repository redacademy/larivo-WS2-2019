import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import {
  Login,
  Home,
  BookMark,
  StoryForm,
  Activity,
  Profile,
} from '../screens'

const LoginStack = createStackNavigator()

const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen name="Home" component={Login} />
  </LoginStack.Navigator>
)

const HomeStack = createStackNavigator()

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
)

const BookMarkStack = createStackNavigator()

const BookMarkStackScreen = () => (
  <BookMarkStack.Navigator>
    <BookMarkStack.Screen name="Home" component={BookMark} />
  </BookMarkStack.Navigator>
)

const StoryFormStack = createStackNavigator()

const StoryFormStackScreen = () => (
  <StoryFormStack.Navigator>
    <StoryFormStack.Screen name="Home" component={StoryForm} />
  </StoryFormStack.Navigator>
)

const ActivityStack = createStackNavigator()

const ActivityStackScreen = () => (
  <ActivityStack.Navigator>
    <ActivityStack.Screen name="Home" component={Activity} />
  </ActivityStack.Navigator>
)

const ProfileStack = createStackNavigator()

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Home" component={Profile} />
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
