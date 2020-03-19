import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import {Welcome} from '../screens/Welcome'
import {useAuth} from '../hooks'
import {
  Register,
  Login,
  Username,
  HashtagScreen,
} from '../screens/Register'
import {Home} from '../screens/Home'
import {BookMark} from '../screens/BookMark'
import {StoryForm} from '../screens/StoryForm'
import {Activity} from '../screens/Activity'
import HomeTabIcon from '../../assets/icons/toolbar/icon-toolbar-home-active.svg'
import HomeTabInActiveIcon from '../../assets/icons/toolbar/icon-toolbar-home-inactive.svg'
import BookMarkIcon from '../../assets/icons/toolbar/icon-toolbar-feed-active.svg'
import BookMarkInActiveIcon from '../../assets/icons/toolbar/icon-toolbar-feed-inactive.svg'
import StoryFormIcon from '../../assets/icons/toolbar/icon-toolbar-post.svg'
import ResourceInActiveIcon from '../../assets/icons/toolbar/icon-toolbar-resource-inactive.svg'
import ResourceIcon from '../../assets/icons/toolbar/icon-toolbar-resource-active.svg'
import ProfileInactiveIcon from '../../assets/icons/toolbar/icon-toolbar-profile-inactive.svg'
import ProfileIcon from '../../assets/icons/toolbar/icon-toolbar-profile-active.svg'
import {
  Profile,
  ProfileStory,
  ProfileBookMark,
  ProfileDraft,
  ProfileActivity,
  Bio,
} from '../screens/Profile'
import {
  Settings,
  Notifications,
  DeleteAccount,
  EditProfile,
  ChangeUsername,
  ChangePassword,
} from '../screens/Settings'
import {Spinner} from '../components/Spinner'
import {Story} from '../screens/Story'
import Guest from '../screens/Guest/Guest'
import GuestTabs from './GuestNav'
import {Draft} from '../screens/Draft'
import SearchTabs from './SearchTabs'

const LoginStack = createStackNavigator()

const WelcomeStackScreen = () => (
  <LoginStack.Navigator initialRouteName="Welcome" headerMode="none">
    <LoginStack.Screen name="Welcome" component={Welcome} />
    <LoginStack.Screen name="Guest" component={GuestTabs} />
    <LoginStack.Screen name="GuestStory" component={Story} />
    <LoginStack.Screen name="Register" component={Register} />
    <LoginStack.Screen name="Login" component={Login} />
    <LoginStack.Screen name="Username" component={Username} />
    <LoginStack.Screen
      name="HashtagScreen"
      component={HashtagScreen}
    />
  </LoginStack.Navigator>
)

const HomeStack = createStackNavigator()

const HomeStackScreen = () => (
  <HomeStack.Navigator mode="modal" headerMode="none">
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="HomeStory" component={Story} />
    <HomeStack.Screen name="SearchTabs" component={SearchTabs} />
  </HomeStack.Navigator>
)

const BookMarkStack = createStackNavigator()

const BookMarkStackScreen = () => (
  <BookMarkStack.Navigator mode="modal" headerMode="none">
    <BookMarkStack.Screen name="Bookmark" component={BookMark} />
    <BookMarkStack.Screen name="BookmarkStory" component={Story} />
    <BookMarkStack.Screen name="SearchTabs" component={SearchTabs} />
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
  <ProfileStack.Navigator mode="modal" headerMode="none">
    <ProfileStack.Screen name="Profile" component={Profile} />
    <ProfileStack.Screen
      name="ProfileStory"
      component={ProfileStory}
    />
    <HomeStack.Screen name="SingleStory" component={Story} />
    <ProfileStack.Screen
      name="ProfileBookMark"
      component={ProfileBookMark}
    />
    <HomeStack.Screen name="SingleBookMark" component={Story} />
    <ProfileStack.Screen
      name="ProfileDraft"
      component={ProfileDraft}
    />
    <HomeStack.Screen name="SingleDraft" component={Draft} />
    <ProfileStack.Screen
      name="ProfileActivity"
      component={ProfileActivity}
    />
    <ProfileStack.Screen name="Settings" component={Settings} />
    <ProfileStack.Screen
      name="Notifications"
      component={Notifications}
    />
    <ProfileStack.Screen name="EditProfile" component={EditProfile} />
    <ProfileStack.Screen
      name="DeleteAccount"
      component={DeleteAccount}
    />
    <ProfileStack.Screen name="Bio" component={Bio} />
    <ProfileStack.Screen
      name="ChangeUsername"
      component={ChangeUsername}
    />
    <ProfileStack.Screen
      name="ChangePassword"
      component={ChangePassword}
    />
  </ProfileStack.Navigator>
)

const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const {name} = route
          if (name === 'Home') {
            if (focused) {
              return <HomeTabIcon />
            } else {
              return <HomeTabInActiveIcon />
            }
          } else if (name === 'Bookmark') {
            if (focused) {
              return <BookMarkIcon />
            } else {
              return <BookMarkInActiveIcon />
            }
          } else if (name === 'StoryForm') {
            return <StoryFormIcon />
          } else if (name === 'Activity') {
            if (focused) {
              return <ResourceIcon />
            } else {
              return <ResourceInActiveIcon />
            }
          } else if (name === 'Profile') {
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
        name="StoryForm"
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
  )
}

const RootStackNavigation = () => {
  const {user} = useAuth()
  if (typeof user === 'undefined') {
    return <Spinner />
  }
  if (!user) {
    return <WelcomeStackScreen />
  }

  return <HomeTabs />
}

const Navigation = () => (
  <NavigationContainer>
    <RootStackNavigation />
  </NavigationContainer>
)

export default Navigation
