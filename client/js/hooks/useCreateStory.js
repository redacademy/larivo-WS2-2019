import {useMutation} from '@apollo/react-hooks'
import {CREATE_STORY} from '../context'

const useCreateStory = () => {
  const [createStory, {data, error}] = useMutation(CREATE_STORY)
  const handleCreateStory = args => createStory(args)
  return [handleCreateStory, data, error]
}

export default useCreateStory
