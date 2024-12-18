/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from "react";
import * as styles from "./feed-styles.scss";
import { imagesPresets } from "@/view/helpers/image-preset-helper";
import { UserDataContext } from "@/main/contexts/user-data-context";
import { UserVerification } from "@/view/elements/verification/user-verification";
import LikeButton from "./elements/buttons/like";
import CommentButton from "./elements/buttons/comment";
import ShareButton from "./elements/buttons/share";
import SaveAsFavoriteButton from "./elements/buttons/favorite";
import MoreButton from "./elements/buttons/more";
import EmojiButton from "./elements/buttons/emoji";

export const Feed: React.FC<any> = () => {
  const { UserData } = useContext(UserDataContext);
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
                  <div
                    className={styles.feedPostProfileName}
                    style={post.user?.verification && { gap: "5px" }}
                  >
                    <span className={styles.feedPostProfileUsername}>
                      {post.user.username}
                    </span>
                    <span>
                      {post.user.verification && <UserVerification />}
                    </span>
                  </div>
                  <span className={styles.feedPostHeaderSeparator}>•</span>
                  <time className={styles.feedPostTime}>{post.time_moved}</time>
                </div>
                <div>
                  {(post.local || post.audio) && (
                    <span className={styles.feedPostDetailInformation}>
                      {post.local?.name || post.audio?.name}
                    </span>
                  )}
                </div>
              </div>
              <div className={styles.feedPostProfileMore}>
                <button>
                  <MoreButton />
                </button>
              </div>
            </div>
            <div className={styles.feedPostContent}>
              {/* verificação se tipo de arquivo é video ou imagem */}
              <img
                src={post.media_content && String(post.media_content)}
                alt={post.user.name + " post"}
              />
            </div>
            <div className={styles.feedPostInteractionContainer}>
              <div className={styles.feedPostInteraction}>
                <div>
                  <div>
                    <LikeButton />
                  </div>
                </div>
                <div>
                  <div>
                    <CommentButton />
                  </div>
                </div>
                <div>
                  <div>
                    <ShareButton />
                  </div>
                </div>
                <div className={styles.saveAsFavoriteButton}>
                  <div>
                    <SaveAsFavoriteButton />
                  </div>
                </div>
              </div>
              <div className={styles.feedPostInsight}>
                {String(post.likes).length < 7 ? (
                  <span className={styles.feedLikeCount}>
                    {post.likes.toLocaleString("en-US")} likes
                  </span>
                ) : (
                  <span className={styles.feedLikeCount}>
                    {String(post.likes).slice(0, 1)}M likes
                  </span>
                )}
                <div className={styles.feedPostAuthor}>
                  <span>{post.user.username}</span>
                  {post.user.verification && (
                    <div>
                      <UserVerification />
                    </div>
                  )}
                  <p>{post.title}</p>
                </div>
              </div>
              <div className={styles.feedPostShowComments}>
                <span>
                  {post.comments.length > 1
                    ? `View all ${post.comments.length} comments`
                    : "View 1 comment"}
                </span>
              </div>
              <div className={styles.feedPostCommentBar}>
                <input
                  placeholder="Add a comment..."
                  type="text"
                  name="comment"
                  id="comment"
                  className={styles.feedPostCommentInput}
                />
                <button className={styles.feedPostEmojiButton}>
                  <EmojiButton />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
