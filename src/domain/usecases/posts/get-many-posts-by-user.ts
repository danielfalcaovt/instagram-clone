import { UserPost } from "@/domain/protocols/user/post";

export interface GetManyPostsByUser {
  getManyBy: (userId: string) => Promise<GetUserPostModel[]>
}

export type GetUserPostModel = {
  time_moved: string
} & UserPost
