import React, {useState} from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import ActiveLike from '../../../assets/icons/reactions/icon-reactions-thumbs_up-active.svg'
import InActiveLike from '../../../assets/icons/reactions/icon-reactions-thumbs_up-inactive.svg'
import HeartActive from '../../../assets/icons/reactions/icon-reactions-heart-active.svg'
import HeartInActive from '../../../assets/icons/reactions/icon-reactions-heart-inactive.svg'
import ActiveSad from '../../../assets/icons/reactions/icon-reactions-sad-active.svg'
import InActiveSad from '../../../assets/icons/reactions/icon-reactions-sad-inactive.svg'
import ActiveSpeechless from '../../../assets/icons/reactions/icon-reactions-speechless-active.svg'
import InActiveSpeechless from '../../../assets/icons/reactions/icon-reactions-speechless-inactive.svg'
import ActiveClap from '../../../assets/icons/reactions/icon-reactions-high_five-active.svg'
import InActiveClap from '../../../assets/icons/reactions/icon-reactions-high_five-inactive.svg'

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
        ) : type === 'sad' ? (
          liked ? (
            <ActiveSad />
          ) : (
            <InActiveSad />
          )
        ) : type === 'speechless' ? (
          liked ? (
            <ActiveSpeechless />
          ) : (
            <InActiveSpeechless />
          )
        ) : type === 'clap' ? (
          liked ? (
            <ActiveClap />
          ) : (
            <InActiveClap />
          )
        ) : null}
      </TouchableOpacity>
    </View>
  )
}
export default ReactionBar
