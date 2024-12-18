import { Audio } from "../audio/audio"
import { Local } from "../local/local"
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
  audio?: Audio
  local?: Local
  user: User
}

export interface Comment {
  id: string
  text: string
  User: User
}
