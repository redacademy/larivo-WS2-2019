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
export {GUEST_FEED, USER_FEED, STORY}
