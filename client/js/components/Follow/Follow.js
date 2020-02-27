import React, {useState} from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import FollowIcon from '../../../assets/icons/profile/icon-profile-follow.svg'

const Follow = ({type}) => {
  const [followed, setFollowed] = useState(false)
  const handlePress = () => setFollowed(!followed)
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        {type === 'follow' ? (
          followed ? (
            <FollowIcon />
          ) : (
            <Text>following</Text>
          )
        ) : null}
      </TouchableOpacity>
    </View>
  )
}

export default Follow
