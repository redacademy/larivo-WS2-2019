import {gql} from 'apollo-boost'

const SIGN_UP = gql`
  mutation signup(
    $email: String!
    $password: String!
    $userName: String!
    $hashtags: [String!]!
  ) {
    signup(
      email: $email
      password: $password
      userName: $userName
      hashtags: $hashtags
    ) {
      user {
        id
        userName
        email
        bio
        favoriteStories {
          id
        }
        following {
          id
        }
        followers {
          id
        }
      }
      token
    }
  }
`
const LOG_IN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        userName
        email
        bio
        favoriteStories {
          id
        }
        following {
          id
        }
        followers {
          id
        }
      }
      token
    }
  }
`

const CREATE_STORY = gql`
  mutation createStory(
    $title: String!
    $content: String!
    $hashtags: [String!]!
    $published: Boolean!
  ) {
    createStory(
      title: $title
      content: $content
      hashtags: $hashtags
      published: $published
    ) {
      id
    }
  }
`

const CREATE_DRAFT = gql`
  mutation createDraft(
    $title: String!
    $content: String!
    $hashtags: [String!]!
    $published: Boolean!
  ) {
    createDraft(
      title: $title
      content: $content
      hashtags: $hashtags
      published: $published
    ) {
      id
    }
  }
`

const PUBLISH = gql`
  mutation publish(
    $id: String!
    $title: String!
    $content: String!
    $hashtags: [String!]!
  ) {
    publish(
      id: $id
      title: $title
      content: $content
      hashtags: $hashtags
    ) {
      id
    }
  }
`

const FAVORITE_STORY = gql`
  mutation favoriteStory($id: String!) {
    favoriteStory(id: $id) {
      id
    }
  }
`

const UNFAVORITE_STORY = gql`
  mutation unFavoriteStory($id: String!) {
    unFavoriteStory(id: $id) {
      id
    }
  }
`

const UPDATE_BIO = gql`
  mutation updateBio($bio: String!) {
    updateBio(bio: $bio) {
      id
    }
  }
`

const UPDATE_USERNAME = gql`
  mutation updateUserName($userName: String!) {
    updateUserName(userName: $userName) {
      id
    }
  }
`
const UPDATE_EMAIL = gql`
  mutation updateEmail($email: String!) {
    updateEmail(email: $email) {
      id
    }
  }
`

const DELETE_USER = gql`
  mutation deleteUser($email: String!) {
    deleteUser(email: $email) {
      id
    }
  }
`

const FOLLOW_USER = gql`
  mutation followUser($id: String!) {
    followUser(id: $id) {
      id
    }
  }
`

const UNFOLLOW_USER = gql`
  mutation unFollowUser($id: String!) {
    unFollowUser(id: $id) {
      id
    }
  }
`

export {
  SIGN_UP,
  LOG_IN,
  CREATE_STORY,
  CREATE_DRAFT,
  PUBLISH,
  FAVORITE_STORY,
  UNFAVORITE_STORY,
  UPDATE_BIO,
  UPDATE_USERNAME,
  UPDATE_EMAIL,
  FOLLOW_USER,
  UNFOLLOW_USER,
  DELETE_USER,
}
