/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import * as styles from './activity-feed-styles.scss'
import { StoriesContainer } from "./components/stories/stories-container"
import { Feed } from "./components/feed/feed"

export const ActivityFeed: React.FC<any> = () => {
  return (
    <div className={styles.activityFeed}>
      <StoriesContainer/>
      <Feed/>
    </div>
  )
}
