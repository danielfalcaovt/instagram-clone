/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from "react";
import * as styles from "./feed-styles.scss";
import { imagesPresets } from "@/view/helpers/image-preset-helper";
import { UserDataContext } from "@/main/contexts/user-data-context";

export const Feed: React.FC<any> = () => {
  const { UserData } = useContext(UserDataContext)
  return (
    <div className={styles.feed}>
      {UserData.posts?.map((post) => {
        return (
          <div key={post.id} className={styles.feedPost}>
            <div className={styles.feedPostHeader}>
              <div className={styles.feedPostProfileImg}>
                <img
                  src={
                    (post.user.profile_img && String(post.user.profile_img)) ||
                    imagesPresets.NOTFOUND
                  }
                  alt={post.user.name + " profile image"}
                />
              </div>
              <div className={styles.feedPostProfileDetails}>
                <div>
                  <span className={styles.feedPostProfileName}>
                    {post.user.name}
                  </span>
                  •
                  <time className={styles.feedPostTime} >
                    {post.time_moved}
                  </time>
                </div>
              </div>
              <div className={styles.feedPostProfileMore}></div>
            </div>
            <div className={styles.feedPostContent}>
              {/* verificação se tipo de arquivo é video ou imagem */}
              <img
                src={post.media_content && String(post.media_content)}
                alt={post.user.name + " post"}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
