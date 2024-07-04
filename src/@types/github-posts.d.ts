export interface Post {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: User
  state: string
  locked: boolean
  comments: number
  created_at: string
  updated_at: string
  author_association: string
  body: string
  reactions: Reactions
  timeline_url: string
  score: number
}
