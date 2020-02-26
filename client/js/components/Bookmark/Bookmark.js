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
  const [Bookmarked, setBookmark] = useState(false)
  const handlePress = () => setBookmarked(!Bookmarked)
  return (
    <View>
      <TouchableOpacity>
        <ActiveBookmark />
      </TouchableOpacity>
    </View>
  )
}
export default Bookmark
