import {gql} from 'apollo-boost'

const ALL_STORIES = gql`
  query feed {
    feed {
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
export {ALL_STORIES}
