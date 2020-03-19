import {useQuery} from '@apollo/react-hooks'
import {SEARCHED_USERS} from '../context/apollo'
const getSearchedUsers = query => {
  const {data, loading, error} = useQuery(SEARCHED_USERS, {
    variables: {query},
  })
  return {users: data ? data.searchedUsers : null, loading, error}
}

export default getSearchedUsers
