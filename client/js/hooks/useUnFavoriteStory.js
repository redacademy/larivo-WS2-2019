import {useMutation} from '@apollo/react-hooks'
import {UNFAVORITE_STORY} from '../context'

const useUnFavoriteStory = () => {
  const [unFavoriteStory, {data, error}] = useMutation(
    UNFAVORITE_STORY,
    {
      refetchQueries: ['userFeed', 'me', 'guestFeed'],
    },
  )
  return [unFavoriteStory, data, error]
}

export default useUnFavoriteStory
