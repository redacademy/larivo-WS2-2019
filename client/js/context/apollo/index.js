import client from './client'
import {GUEST_FEED, USER_FEED} from './queries'
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
  GUEST_FEED,
  USER_FEED,
  SIGN_UP,
  LOG_IN,
  CREATE_STORY,
  CREATE_DRAFT,
  UPDATE_BIO,
  UPDATE_USERNAME,
}
