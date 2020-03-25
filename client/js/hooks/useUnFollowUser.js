import {useMutation} from '@apollo/react-hooks'
import {UNFOLLOW_USER} from '../context'

const useUnFollowUser = () => {
  const [unFollowUser, {data, error}] = useMutation(UNFOLLOW_USER, {
    refetchQueries: ['me'],
  })
  return [unFollowUser, data, error]
}

export default useUnFollowUser
