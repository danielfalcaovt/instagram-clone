/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import * as styles from "./stories-container-styles.scss";

const images = {
  NOTFOUND: "/assets/image-not-found.jpg",
};

export const StoriesContainer: React.FC<any> = () => {
  const data: any[] = [
    {
      id: 1,
      name: "billieeilish",
      img: undefined,
      status: true,
    },
    {
      id: 2,
      name: "d4vd",
      img: undefined,
      status: true,
    },
    {
      id: 3,
      name: "danielfalcaovt",
      img: undefined,
      status: true,
    },
    {
      id: 4,
      name: "deenedev",
      img: undefined,
      status: true,
    },
    {
      id: 5,
      name: "nomegrande",
      img: undefined,
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
                  <img src={userStory.img || images.NOTFOUND} alt="user image" />
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
