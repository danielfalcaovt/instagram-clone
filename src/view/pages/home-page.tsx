import React, { JSX, useContext, useEffect } from "react";
import Aside from "../components/aside/aside";
import * as styles from "./home-page-styles.scss";
import { Outlet } from "react-router-dom";
import { GetManyPostsByUser } from "@/domain/usecases/posts/get-many-posts-by-user";
import { SimulatedData } from "../../infra/http-client/data.simulated";
import { UserDataContext } from "@/main/contexts/user-data-context";

export default function HomePage(dependencies: {
  DbGetManyPostsByUser: GetManyPostsByUser;
}): JSX.Element {
  const { setUserData } = useContext(UserDataContext);
  useEffect(() => {
    dependencies.DbGetManyPostsByUser.getManyBy(SimulatedData[0].user.id).then(
      (result) => {
        setUserData((oldValue) => {
          return {
            ...oldValue,
            posts: result,
          };
        });
      }
    );
  }, []);
  return (
    <div className={styles.homeContainer}>
      <Aside />
      <Outlet />
    </div>
  );
}
