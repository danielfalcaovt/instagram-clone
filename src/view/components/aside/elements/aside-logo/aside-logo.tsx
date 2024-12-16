import React from "react";
import { JSX } from "react";
import * as styles from "./aside-logo-styles.scss";

export function AsideLogo(): JSX.Element {
  return (
    <div className={styles.asideLogo}>
      <img src="/assets/instagram-logo.png" alt="aside logo"></img>
    </div>
  );
}
