/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import * as styles from "./stories-container-styles.scss";
import { UserStory } from "@/domain/protocols/user/story";

const images = {
  NOTFOUND: "/assets/image-not-found.jpg",
};

export const StoriesContainer: React.FC<any> = () => {
  const data: UserStory[] = [
    {
      id: '1',
      name: "billieeilish",
      status: true,
    },
    {
      id: '2',
      name: "d4vd",
      status: true,
    },
    {
      id: '3',
      name: "danielfalcaovt",
      status: true,
    },
    {
      id: '4',
      name: "deenedev",
      status: true,
    },
    {
      id: '5',
      name: "nomegrande",
      status: true,
    },
  ];
  return (
    <div className={styles.storiesContainer}>
      <ul className={styles.stories}>
        {data.map((userStory) => {
          return (
            <li className={styles.story} key={userStory.id}>
              <div className={styles.storyProfileImage}>
                <span>
                  <img src={(userStory.img && String(userStory.img)) || images.NOTFOUND} alt="user image" />
                </span>
                <canvas
                  className={styles[userStory.status ? "active" : "finished"]}
                ></canvas>
              </div>
              <div className={styles.storyProfileName}>
                <span>{userStory.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
