import React from 'react'
import styles from './styles'
import CardInitials from '../CardInitials'
import CardHashtag from  '../CardHashtag'
import ContinueIcon from '../../../assets/icons/Continue.svg'
import Like from '../../../assets/icons/reactions/icon-reactions-thumbs_up-inactive.svg'
import Heart from '../../../assets/icons/reactions/icon-reactions-heart-inactive.svg'
import Sad from '../../../assets/icons/reactions/icon-reactions-sad-inactive.svg'
import Speechless from '../../../assets/icons/reactions/icon-reactions-speechless-inactive.svg'
import Clap from '../../../assets/icons/reactions/icon-reactions-high_five-inactive.svg'
import BookmarkIcon from '../../../assets/icons/login/icon-bookmark-active.svg'
import FormattedDate from '../FormattedDate'

import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

let theme = {}

const StoryCard = ({ 
    userName, 
    title, 
    readTime, 
    createdAt, 
    content, 
    hashtags,  
  }) => {

   //show bookmark icon when true 
   const bookmarked = true

    return (
    <View style={styles(theme).card}>
      <View style={styles(theme).initial}>
          <CardInitials >{userName}</CardInitials>
        </View>
        {bookmarked ? 
        <View style={styles(theme).bookmarkIcon}>
          <BookmarkIcon />
        </View>
        : null}
        
        <View style={styles(theme).content}>
          <Text style={styles(theme).title}>{title}</Text> 

          <Text style={styles(theme).createdAt}>
          <FormattedDate createdAt={createdAt} />  |  {readTime}</Text>
          <Text style={styles(theme).body} numberOfLines={2}>{content}</Text>
          
          <View style={styles(theme).hashtagContainer}>
            {hashtags.map((hashtag, i)=>{
              if (i < 2){
                return(
                  <CardHashtag key={i}>{hashtag.name}</CardHashtag>
                )}})}
            {hashtags.length > 2 ? 
              // <TouchableOpacity>
                <ContinueIcon fill={'#1E6A62'} 
                style={styles(theme).continueIcon}
                />
              // </TouchableOpacity> 
              : null
            }
          </View>

          {/* <View style={styles(theme).reactionsContainer}>
            <Like style={styles(theme).reactions}/>
            <Heart style={styles(theme).reactions}/>
            <Sad style={styles(theme).reactions}/>
            <Speechless style={styles(theme).reactions}/>
            <Clap style={styles(theme).reactions}/>
            <Text style={styles(theme).body}>{'9999'}</Text>
          </View> */}

        </View>
      </View>
  )
}

export default StoryCard
