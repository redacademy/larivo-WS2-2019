import {useMutation} from '@apollo/react-hooks'
import {FOLLOW_USER} from '../context'

const useFollowUser = () => {
  const [followUser, {data, error}] = useMutation(FOLLOW_USER, {
    refetchQueries: ['me'],
  })
  return [followUser, data, error]
}

export default useFollowUser
