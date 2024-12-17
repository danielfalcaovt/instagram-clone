import React, { JSX, useState } from "react";
import Router from "../routes/router";
import { IUserData, UserDataContext } from "../contexts/user-data-context";

export default function App(): JSX.Element {
  const [UserData, setUserData] = useState<IUserData>({
    profile: {
      email: "",
      id: "",
      name: "",
      username: "",
    },
  });
  return (
    <UserDataContext value={{ UserData, setUserData }}>
      <Router/>
    </UserDataContext>
)
}
