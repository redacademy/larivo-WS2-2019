import React, {useState} from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import ActiveLike from '../../../assets/icons/reactions/icon-reactions-thumbs_up-active.svg'
import InActiveLike from '../../../assets/icons/reactions/icon-reactions-thumbs_up-inactive.svg'
import HeartActive from '../../../assets/icons/reactions/icon-reactions-heart-active.svg'
import HeartInActive from '../../../assets/icons/reactions/icon-reactions-heart-inactive.svg'

const ReactionBar = ({type}) => {
  const [liked, setLiked] = useState(false)
  const handlePress = () => setLiked(!liked)
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        {type === 'like' ? (
          liked ? (
            <ActiveLike />
          ) : (
            <InActiveLike />
          )
        ) : type === 'love' ? (
          liked ? (
            <HeartActive />
          ) : (
            <HeartInActive />
          )
        ) : null}
      </TouchableOpacity>
    </View>
  )
}
export default ReactionBar
