import { UserStory } from "@/domain/protocols/user/story";
import { User } from "@/domain/protocols/user/user";
import { GetUserPostModel } from "@/domain/usecases/posts/get-many-posts-by-user";
import { createContext, Dispatch, SetStateAction } from "react";

export interface IUserData {
  profile: User,
  posts?: GetUserPostModel[],
  stories?: UserStory[]
}

interface UserDataContextModel {
  UserData: IUserData,
  setUserData: Dispatch<SetStateAction<IUserData>>
}

export const UserDataContext = createContext<UserDataContextModel>({
  UserData: {
    profile: {
      email: '',
      id: '',
      name: '',
      username: ''
    }
  },
  setUserData: () => {}
})
