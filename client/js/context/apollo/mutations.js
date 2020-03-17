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
  mutation publish($id: String!) {
    publish(id: $id) {
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

// const UPDATE_PASSWORD = gql`
//   mutation updatePassword($email: String!) {
//     updateBio(email: $email) {
//       id
//     }
//   }
// `

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
  DELETE_USER,
}
