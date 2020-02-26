import React, {useState} from 'react'
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from 'react-native'
import ActiveBookmark from '../../../assets/icons/login/icon-bookmark-active.svg'
import InActiveBookmark from '../../../assets/icons/login/icon-bookmark-inactive.svg'

const Bookmark = () => {
  const [bookmarked, setBookmark] = useState(false)
  const handlePress = () => setBookmark(!bookmarked)
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        {bookmarked ? <ActiveBookmark /> : <InActiveBookmark />}
      </TouchableOpacity>
    </View>
  )
}
export default Bookmark
