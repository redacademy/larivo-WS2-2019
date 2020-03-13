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

const UPDATE_BIO = gql`
  mutation updateBio($bio: String!) {
    updateBio(bio: $bio) {
      id
    }
  }
`

const UPDATE_USERNAME = gql`
  mutation updateUserName($userName: String!) {
    updateBio(userName: $userName) {
      id
    }
  }
`

export {
  SIGN_UP,
  LOG_IN,
  CREATE_STORY,
  CREATE_DRAFT,
  UPDATE_BIO,
  UPDATE_USERNAME,
}
