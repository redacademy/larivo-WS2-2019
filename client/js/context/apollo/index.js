import client from './client'
import {ALL_STORIES} from './queries'
import {
  SIGN_UP,
  LOG_IN,
  CREATE_STORY,
  CREATE_DRAFT,
  UPDATE_BIO,
  UPDATE_USERNAME,
} from './mutations'

export default client
export {
  ALL_STORIES,
  SIGN_UP,
  LOG_IN,
  CREATE_STORY,
  CREATE_DRAFT,
  UPDATE_BIO,
  UPDATE_USERNAME,
}
