import { IRemoteGetManyUserPostByUser } from "@/application/protocols/remote-get-many-user-post-by-user";
import { UserPost } from "@/domain/protocols/user/post";
import { GetManyPostsByUser, GetUserPostModel } from "@/domain/usecases/posts/get-many-posts-by-user";

export class GetManyUserPostByUser implements GetManyPostsByUser {
  constructor(private readonly remoteGetManyUserPostByUser: IRemoteGetManyUserPostByUser) { }
  async getManyBy(userId: string): Promise<GetUserPostModel[]> {
    const result: GetUserPostModel[] = []
    const posts = await this.remoteGetManyUserPostByUser.getManyBy(userId)
    posts.map((post: UserPost) => {
      result.push({
        ...post,
        time_moved: this.howMuchTimeMoved(post.created_at)
      })
    })
    return result
  }

  howMuchTimeMoved(sinceDate: Date): string {
    const now = new Date()
    const howMuchTimeMovedInMs = now.getTime() - sinceDate.getTime()
    const howMuchTimeInDays = howMuchTimeMovedInMs / (1000 * 60 * 60 * 12)
    const timeMovedInMS = new Date(howMuchTimeMovedInMs)
    if (howMuchTimeInDays >= 365) {
      const yearsMoved = timeMovedInMS.getFullYear() - now.getFullYear()
      return `${yearsMoved}y`
    } else if (howMuchTimeInDays >= 31) {
      const monthsMoved = timeMovedInMS.getMonth() - now.getMonth()
      return `${monthsMoved}m`
    } else if (howMuchTimeInDays >= 7) {
      const weeksMoved = timeMovedInMS.getDate()
      return `${weeksMoved > 28 ? 4 : weeksMoved > 21 ? 3 : weeksMoved > 14 ? 2 : 1}w`
    }
  }
}
