import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {withUserData} from '../withUserData'
import {GridView} from '../GridView'
import {ListView} from '../ListView'

const GridViewWithData = withUserData(GridView)
const ListViewWithData = withUserData(ListView)

const Tab = createMaterialTopTabNavigator()

const ProfileTabs = () => (
  <Tab.Navigator
    tabBarOptions={{
      tabStyle: {
        borderBottomWidth: 0.3,
        borderBottomColor: '#1E6A62',
        borderTopWidth: 0.3,
        borderTopColor: '#1E6A62',
      },
      indicatorStyle: {backgroundColor: '#1E6A62'},
    }}
  >
    <Tab.Screen
      initialRouteName="GridView"
      name="GridView"
      component={GridViewWithData}
    />
    <Tab.Screen name="ListView" component={ListViewWithData} />
  </Tab.Navigator>
)

export default ProfileTabs
