import React from "react";
import * as styles from './navbar-button-styles.scss'

export interface NavbarButtonPropsModel {
  text: string;
  htmlAttr?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  children: React.ReactNode;
}

export const NavbarButton: React.FC<NavbarButtonPropsModel> = ({ text, children, htmlAttr }) => {
  return (
    <button className={styles.navbarButton} {...htmlAttr}>
      <div>
        {children}
      </div>
      <div>
        <span>{text && text}</span>
      </div>
    </button>
  );
};
