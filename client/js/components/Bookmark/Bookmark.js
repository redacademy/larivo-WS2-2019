import React, {useState} from 'react'
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from 'react-native'
import ActiveBookmark from '../../../assets/icons/login/icon-bookmark-active.svg'
import InActiveBookmark from '../../../assets/icons/login/icon-bookmark-inactive.svg'

const Bookmark = ({type}) => {
  const [bookmarked, setBookmark] = useState(false)
  const handlePress = () => setBookmark(!bookmarked)
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        {type === 'booked' ? (
          bookmarked ? (
            <ActiveBookmark />
          ) : (
            <InActiveBookmark />
          )
        ) : null}
      </TouchableOpacity>
    </View>
  )
}
export default Bookmark
