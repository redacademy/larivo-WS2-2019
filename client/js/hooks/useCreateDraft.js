import {useMutation} from '@apollo/react-hooks'
import {CREATE_DRAFT} from '../context'

const useCreateDraft = () => {
  const [createDraft, {data, error}] = useMutation(CREATE_DRAFT, {
    refetchQueries: ['USER_DRAFTS'],
  })
  const handleCreateDraft = args => createDraft(args)
  return [handleCreateDraft, data, error]
}

export default useCreateDraft
