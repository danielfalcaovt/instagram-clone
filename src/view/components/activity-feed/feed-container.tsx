/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import * as styles from './feed-container-styles.scss'
import { ActivityFeed } from "./components/activity-feed/activity-feed";
import { Suggestions } from "./components/suggestions/suggestions";

export const FeedContainer: React.FC<any> = () => {
  return (
    <section className={styles.feedContainer}>
      <ActivityFeed/>
      <Suggestions/>
    </section>
  );
}
