/* eslint-disable @typescript-eslint/no-unused-vars */
import { IRemoteGetManyUserPostByUser } from "@/application/protocols/remote-get-many-user-post-by-user";
import { UserPost } from "@/domain/protocols/user/post";
import { SimulatedData } from "@/infra/http-client/data.simulated";

let HttpClientResultMock = SimulatedData
HttpClientResultMock = HttpClientResultMock.map(res => {
  delete res.time_moved
  return res
})

export class HttpClientMock implements IRemoteGetManyUserPostByUser {
  async getManyBy(userId: string): Promise<UserPost[]> {
    return new Promise(resolve => resolve(HttpClientResultMock))
  }
}
