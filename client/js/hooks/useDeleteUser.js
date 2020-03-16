import {useMutation} from '@apollo/react-hooks'
import {DELETE_USER} from '../context'

const useDeleteUser = () => {
  const [deleteUser, {data, error}] = useMutation(DELETE_USER, {
    refetchQueries: ['feed'],
  })
  const handleDeleteUser = args => deleteUser(args)
  return [handleDeleteUser, data, error]
}

export default useDeleteUser
