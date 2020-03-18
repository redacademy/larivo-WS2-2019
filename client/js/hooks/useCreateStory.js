import {useMutation} from '@apollo/react-hooks'
import {CREATE_STORY} from '../context'

const useCreateStory = () => {
  const [createStory, {data, error}] = useMutation(CREATE_STORY, {
    refetchQueries: ['userFeed, guestFeed', 'me'],
  })
  const handleCreateStory = args => createStory(args)
  return [handleCreateStory, data, error]
}

export default useCreateStory
