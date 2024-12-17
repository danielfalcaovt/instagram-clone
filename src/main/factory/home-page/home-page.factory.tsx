import React, { JSX } from "react";
import HomePage from "@/view/pages/home-page";
import { GetManyUserPostByUser } from "@/application/usecases/user-post/get-many-user-post-by-user";
import { HttpClientMock } from "@/infra/http-client/http-client-mock";

export default function makeHomePage(): JSX.Element {
  const dbGetManyPostsByUser = new GetManyUserPostByUser(new HttpClientMock())
  return <HomePage DbGetManyPostsByUser={dbGetManyPostsByUser}/>
}
