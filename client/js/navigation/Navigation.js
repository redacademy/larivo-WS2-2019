import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {
  Login,
  Home,
  Settings,
  StoryForm,
  Activity,
  Profile,
  BookMark
} from '../screens'

const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login">
      <Tab.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{title: 'Home'}}
        />
        <Tab.Screen
          name="BookMark"
          component={BookMark}
          options={{title: 'BookMark'}}
        />
        <Tab.Screen
          name="StoryForm"
          component={StoryForm}
          options={{title: '+'}}
        />
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{title: 'Activity'}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Profile'}}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{title: 'Settings'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
