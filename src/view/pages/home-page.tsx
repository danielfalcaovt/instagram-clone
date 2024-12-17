import React, { JSX } from "react"
import Aside from "../components/aside/aside"
import * as styles from './home-page-styles.scss'
import { Outlet } from "react-router-dom"

export default function HomePage(): JSX.Element {
  return (
    <div className={styles.homeContainer}>
      <Aside/>
      <Outlet/>
    </div>
  )
}
