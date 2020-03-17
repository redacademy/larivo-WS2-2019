import client from './client'
import {
  GUEST_FEED,
  USER_FEED,
  STORY,
  USER_STORIES,
  USER_DRAFTS,
} from './queries'
import {
  SIGN_UP,
  LOG_IN,
  CREATE_STORY,
  CREATE_DRAFT,
  PUBLISH,
  UPDATE_BIO,
  UPDATE_USERNAME,
  UPDATE_EMAIL,
  DELETE_USER,
} from './mutations'

export default client
export {
  GUEST_FEED,
  USER_FEED,
  STORY,
  USER_STORIES,
  USER_DRAFTS,
  SIGN_UP,
  LOG_IN,
  CREATE_STORY,
  CREATE_DRAFT,
  PUBLISH,
  UPDATE_BIO,
  UPDATE_USERNAME,
  UPDATE_EMAIL,
  DELETE_USER,
}
