import {useMutation} from '@apollo/react-hooks'
import {UPDATE_USERNAME} from '../context'

const useUpdateBio = () => {
  const [updateUserName, {data, error}] = useMutation(
    UPDATE_USERNAME,
    {
      refetchQueries: ['me'],
    },
  )
  const handleUpdateUserName = args => updateUserName(args)
  return [handleUpdateUserName, data, error]
}

export default useUpdateBio
