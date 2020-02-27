import React, {useState} from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import FollowIcon from '../../../assets/icons/profile/icon-profile-follow.svg'
import FollowingIcon from '../../../assets/icons/profile/icon-profile-follow_active.svg'

import styles from '../Paragraph/styles'

const Follow = ({type}) => {
  const [followed, setFollowed] = useState(false)
  const handlePress = () => setFollowed(!followed)
  return (
    <View style={styles.followIcon}>
      <TouchableOpacity onPress={handlePress}>
        {type === 'follow' ? (
          followed ? (
            <FollowIcon />
          ) : (
            <FollowingIcon />
          )
        ) : null}
      </TouchableOpacity>
    </View>
  )
}

export default Follow
