import { User } from "./user"

export interface UserPost {
  id: string
  title: string
  text: string
  media_content: string | ArrayBuffer
  likes: number
  comments: Comment[]
  shared_count: number
  created_at: Date
  user: User
}

export interface Comment {
  id: string
  text: string
  User: User
}
