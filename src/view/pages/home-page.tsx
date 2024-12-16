import React, { JSX } from "react"
import Aside from "../components/aside/aside"
import { FeedContainer } from "../components/activity-feed/feed-container"
import * as styles from './home-page-styles.scss'

export default function HomePage(): JSX.Element {
  return (
    <div className={styles.homeContainer}>
      <Aside/>
      <FeedContainer/>
    </div>
  )
}
