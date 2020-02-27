import React from 'react'
const stories = [
  {
    id: 1,
    title: 'hey title',
    content: 'hey content',
  },
  {
    id: 2,
    title: 'hey title 2',
    content: 'hey content 2',
  },
  {
    id: 3,
    title: 'hey title 3',
    content: 'hey content 3',
  },
  {
    id: 4,
    title: 'hey title 4',
    content: 'hey content 4',
  },
]

const withUserData = Component => {
  return props => <Component data={stories} {...props} />
}

export default withUserData
