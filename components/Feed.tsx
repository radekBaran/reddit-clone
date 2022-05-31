import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_POSTS } from '../graphql/queries'
import { TPost } from '../typings'
import Post from './Post'

function Feed() {
  const { data, error } = useQuery(GET_ALL_POSTS)

  const posts: TPost[] = data?.getPostList
  return (
    <div>
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  )
}

export default Feed
