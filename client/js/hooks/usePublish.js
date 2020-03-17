import {useMutation} from '@apollo/react-hooks'
import {PUBLISH} from '../context'

const usePublish = () => {
  const [publish, {data, error}] = useMutation(PUBLISH, {
    refetchQueries: ['userFeed, guestFeed'],
  })
  return [publish, data, error]
}

export default usePublish
