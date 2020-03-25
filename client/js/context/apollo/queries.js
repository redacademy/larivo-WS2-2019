import {gql} from 'apollo-boost'

const GUEST_FEED = gql`
  query guestFeed {
    guestFeed {
      id
      createdAt
      author {
        userName
      }
      title
      content
      hashtags {
        name
        id
      }
    }
  }
`

const USER_FEED = gql`
  query userFeed {
    userFeed {
      id
      createdAt
      author {
        userName
      }
      title
      content
      hashtags {
        name
        id
      }
    }
  }
`

const STORY = gql`
  query story($id: ID!) {
    story(id: $id) {
      id
      createdAt
      title
      content
      hashtags {
        name
        id
      }
      author {
        userName
      }
    }
  }
`

const USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      userName
      followers {
        id
      }
      following {
        id
      }
      stories {
        id
        createdAt
        title
        content
        hashtags {
          name
          id
        }
      }
    }
  }
`

const USER_HEADER_INFO = gql`
  query me {
    me {
      userName
      bio
      followers {
        id
      }
      following {
        id
      }
      stories {
        id
      }
    }
  }
`

const USER_STORIES = gql`
  query me {
    me {
      stories {
        id
        createdAt
        title
        content
        hashtags {
          name
          id
        }
        author {
          userName
        }
      }
    }
  }
`

const USER_DRAFTS = gql`
  query me {
    me {
      drafts {
        id
        createdAt
        title
        content
        hashtags {
          name
          id
        }
        author {
          userName
        }
      }
    }
  }
`

const USER_BOOKMARKS = gql`
  query me {
    me {
      favoriteStories {
        id
        createdAt
        title
        content
        hashtags {
          name
        }
        author {
          userName
        }
      }
    }
  }
`

const SEARCHED_USERS = gql`
  query searchedUsers($query: String!) {
    searchedUsers(query: $query) {
      id
      userName
    }
  }
`

const SEARCHED_STORIES = gql`
  query searchedStories($query: String!) {
    searchedStories(query: $query) {
      id
      createdAt
      title
      content
      hashtags {
        name
      }
      author {
        userName
      }
    }
  }
`

const RECOMMENDED_HASHTAGS = gql`
  query recommendedHashtags {
    recommendedHashtags {
      id
      name
    }
  }
`

const FILTERED_STORIES = gql`
  query filteredStories {
    filteredStories {
      id
      createdAt
      author {
        userName
      }
      title
      content
      hashtags {
        name
        id
      }
    }
  }
`

const FOLLOWING_USER_STORIES = gql`
  query me {
    me {
      following {
        stories {
          id
          createdAt
          author {
            userName
          }
          title
          content
          hashtags {
            id
            name
          }
        }
      }
    }
  }
`

export {
  GUEST_FEED,
  USER_FEED,
  STORY,
  USER,
  USER_HEADER_INFO,
  USER_STORIES,
  USER_DRAFTS,
  USER_BOOKMARKS,
  SEARCHED_USERS,
  SEARCHED_STORIES,
  RECOMMENDED_HASHTAGS,
  FILTERED_STORIES,
  FOLLOWING_USER_STORIES,
}
