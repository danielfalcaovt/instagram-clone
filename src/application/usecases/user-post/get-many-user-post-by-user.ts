/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRemoteGetManyUserPostByUser } from "@/application/protocols/remote-get-many-user-post-by-user";
import { UserPost } from "@/domain/protocols/user/post";
import { GetManyPostsByUser, GetUserPostModel } from "@/domain/usecases/posts/get-many-posts-by-user";

export class GetManyUserPostByUser implements GetManyPostsByUser {
  constructor(private readonly remoteGetManyUserPostByUser: IRemoteGetManyUserPostByUser) { }
  async getManyBy(userId: string): Promise<GetUserPostModel[]> {
    const result: GetUserPostModel[] = []
    const posts = await this.remoteGetManyUserPostByUser.getManyBy(userId)
    posts.map((post: UserPost) => {
      console.log(post.created_at)
      result.push({
        ...post,
        time_moved: this.howMuchTimeMoved(post.created_at)
      })
    })
    console.log(result[0].time_moved)
    return result
  }

  howMuchTimeMoved(sinceDate: Date): string {
    const now = new Date()
    const howMuchTimeMovedInMs = (now as any) - (sinceDate as any)
    const howMuchTimeInDays = Math.floor(howMuchTimeMovedInMs / (1000 * 60 * 60 * 24))
    console.log(howMuchTimeInDays)
    if (howMuchTimeInDays >= 365) {
      const yearsMoved = now.getFullYear() - sinceDate.getFullYear()
      return `${yearsMoved}y`
    } else if (howMuchTimeInDays >= 31) {
      const monthsMoved = now.getMonth() - sinceDate.getMonth()
      return `${monthsMoved}m`
    } else if (howMuchTimeInDays >= 7) {
      return `${howMuchTimeInDays > 28 ? 4 : howMuchTimeInDays > 21 ? 3 : howMuchTimeInDays > 14 ? 2 : 1}w`
    } else {
      return howMuchTimeInDays > 0 ? `${howMuchTimeInDays}d` : 'now'
    }
  }
}
