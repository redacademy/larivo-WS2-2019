import {useQuery} from '@apollo/react-hooks'
import {SEARCHED_STORIES} from '../context/apollo'
const getSearchedStories = query => {
  const {data, loading, error} = useQuery(SEARCHED_STORIES, {
    variables: {query},
  })
  return {stories: data ? data.searchedStories : null, loading, error}
}

export default getSearchedStories
