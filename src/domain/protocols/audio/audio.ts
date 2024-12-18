import { User } from "../user/user"

export interface Audio {
  id: string
  name: string
  duration: number
  artist: string | User
}
