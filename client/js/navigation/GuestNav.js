import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import HomeTabIcon from '../../assets/icons/toolbar/icon-toolbar-home-active.svg'
import HomeTabInActiveIcon from '../../assets/icons/toolbar/icon-toolbar-home-inactive.svg'
import ProfileInactiveIcon from '../../assets/icons/toolbar/icon-toolbar-profile-inactive.svg'
import ProfileIcon from '../../assets/icons/toolbar/icon-toolbar-profile-active.svg'
import {Guest, GuestAuth} from '../screens/Guest'
import {Story} from '../screens/Story'
const GuestStack = createStackNavigator()

const GuestStackScreen = () => (
  <GuestStack.Navigator mode="modal" headerMode="none">
    <GuestStack.Screen name="Guest" component={Guest} />
    <GuestStack.Screen name="GuestStory" component={Story} />
  </GuestStack.Navigator>
)

const GuestProfileAuthStack = createStackNavigator()

const GuestProfileAuthStackScreen = () => (
  <GuestProfileAuthStack.Navigator headerMode="none">
    <GuestProfileAuthStack.Screen
      name="GuestProfile"
      component={GuestAuth}
    />
  </GuestProfileAuthStack.Navigator>
)

const GuestTab = createBottomTabNavigator()

const GuestTabs = () => {
  return (
    <GuestTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const {name} = route
          if (name === 'Guest') {
            if (focused) {
              return <HomeTabIcon />
            } else {
              return <HomeTabInActiveIcon />
            }
          } else if (name === 'GuestProfile') {
            if (focused) {
              return <ProfileIcon />
            } else {
              return <ProfileInactiveIcon />
            }
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        inactiveTintColor: '#fff',
        activeTintColor: '#fff',
        style: {
          height: 95,
          backgroundColor: '#03DAC4',
        },
      }}
    >
      <GuestTab.Screen
        name="Guest"
        component={GuestStackScreen}
        options={{title: 'Guest'}}
      />
      <GuestTab.Screen
        name="GuestProfile"
        component={GuestProfileAuthStackScreen}
        options={{title: 'Profile'}}
      />
    </GuestTab.Navigator>
  )
}

export default GuestTabs
