import React from 'react'
import styles from './styles'
import CardInitials from '../CardInitials'
import CardHashtag from '../CardHashtag'
import ContinueIcon from '../../../assets/icons/Continue.svg'
import BookmarkIcon from '../../../assets/icons/login/icon-bookmark-active.svg'
import FormattedDate from '../FormattedDate'

import {Text, View} from 'react-native'

let theme = {}

const StoryCard = ({
  userName,
  title,
  readTime,
  createdAt,
  content,
  hashtags,
  bookmarked,
}) => {
  return (
    <View style={styles(theme).card}>
      <View style={styles(theme).initial}>
        <CardInitials>{userName}</CardInitials>
      </View>
      {bookmarked ? (
        <View style={styles(theme).bookmarkIcon}>
          <BookmarkIcon />
        </View>
      ) : null}

      <View style={styles(theme).content}>
        <Text style={styles(theme).title}>{title}</Text>

        <Text style={styles(theme).createdAt}>
          <FormattedDate createdAt={createdAt} /> | {readTime}
        </Text>
        <Text style={styles(theme).body} numberOfLines={3}>
          {content}
        </Text>

        <View style={styles(theme).hashtagContainer}>
          {hashtags.map((hashtag, i) => {
            if (i < 2) {
              return <CardHashtag key={i}>{hashtag.name}</CardHashtag>
            }
          })}
          {hashtags.length > 2 ? (
            <ContinueIcon
              fill={'#1E6A62'}
              style={styles(theme).continueIcon}
            />
          ) : null}
        </View>
      </View>
    </View>
  )
}

export default StoryCard
