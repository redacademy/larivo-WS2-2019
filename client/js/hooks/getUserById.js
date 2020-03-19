import {useQuery} from '@apollo/react-hooks'
import {USER} from '../context/apollo'
const getUserById = id => {
  const {data, loading, error} = useQuery(USER, {variables: {id}})
  return {user: data ? data.user : null, loading, error}
}

export default getUserById
