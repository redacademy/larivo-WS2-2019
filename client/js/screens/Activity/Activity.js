import React from 'react'
import Bio from '../Profile/Bio'
import {View, Text, ScrollView} from 'react-native'
import StoryDate from '../../components/StoryDate'
import {Register, Username, HashtagScreen} from '../Register'

const Activity = () => {
  return (
    <ScrollView>
      <Bio />
      <StoryDate />
    </ScrollView>
  )
}

export default Activity
