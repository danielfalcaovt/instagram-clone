import React from "react";
import { JSX } from "react";
import { AsideLogo } from './elements/aside-logo/aside-logo'
import { Navbar } from "./elements/navbar/navbar";
import * as styles from './aside-styles.scss'

export default function Aside(): JSX.Element {
  return (
    <aside className={styles.asideContainer}>
      <AsideLogo />
      <Navbar />
    </aside>
  )
}
