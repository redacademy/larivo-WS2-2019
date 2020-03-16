import client, {
  SIGN_UP,
  LOG_IN,
  CREATE_STORY,
  CREATE_DRAFT,
  UPDATE_BIO,
  UPDATE_USERNAME,
  UPDATE_EMAIL,
  DELETE_USER,
} from './apollo'
import AuthContext, {AuthContextProvider} from './auth'

export {
  client,
  SIGN_UP,
  LOG_IN,
  CREATE_STORY,
  CREATE_DRAFT,
  UPDATE_BIO,
  UPDATE_USERNAME,
  UPDATE_EMAIL,
  DELETE_USER,
  AuthContext,
  AuthContextProvider,
}
