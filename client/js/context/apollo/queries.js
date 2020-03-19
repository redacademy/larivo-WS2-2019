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
      }
      author {
        userName
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
      bio
      stories {
        id
        createdAt
        title
        content
      }
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

export {
  GUEST_FEED,
  USER_FEED,
  STORY,
  USER_STORIES,
  USER_DRAFTS,
  USER_BOOKMARKS,
  SEARCHED_USERS,
  SEARCHED_STORIES,
}
