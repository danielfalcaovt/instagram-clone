import { UserPost } from "@/domain/protocols/user/post";

export interface IRemoteGetManyUserPostByUser {
  getManyBy: (userId: string) => Promise<UserPost[]>

}
