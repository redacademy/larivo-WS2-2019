import {useMutation} from '@apollo/react-hooks'
import {UPDATE_BIO} from '../context'

const useUpdateBio = () => {
  const [updateBio, {data, error}] = useMutation(UPDATE_BIO, {
    refetchQueries: ['me'],
  })
  const handleUpdateBio = args => updateBio(args)
  return [handleUpdateBio, data, error]
}

export default useUpdateBio
