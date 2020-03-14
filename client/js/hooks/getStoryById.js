import {useQuery} from '@apollo/react-hooks'
import {STORY} from '../context/apollo'
const getStoryById = id => {
  const {data, loading, error} = useQuery(STORY, {variables: {id}})
  return {story: data ? data.story : null, loading, error}
}

export default getStoryById
