import {useMutation} from '@apollo/react-hooks'
import {FAVORITE_STORY} from '../context'

const useFavoriteStory = () => {
  const [favoriteStory, {data, error}] = useMutation(FAVORITE_STORY, {
    refetchQueries: ['userFeed', 'me', 'guestFeed'],
  })
  return [favoriteStory, data, error]
}

export default useFavoriteStory
