export type TComment = {
  created_at: string
  id: number
  post_id: number
  text: string
  username: string
}

export type TSubreddit = {
  created_at: string
  id: number
  topic: string
}

export type TVote = {
  created_at: string
  id: number
  post_id: number
  upvote: number
  username: string
}

export type TPost = {
  body: string
  created_at: string
  id: number
  image: string
  subreddit_id: number
  title: string
  username: string
  votes: Vote[]
  comments: Comment[]
  subreddit: Subreddit[]
}
