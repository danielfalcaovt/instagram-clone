/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { NavbarButton } from "./navbar-button";
import {
  CreateIcon,
  ExploreIcon,
  HomeIcon,
  MenuIcon,
  MessagesIcon,
  NotificationsIcon,
  ReelsIcon,
  SearchIcon,
} from "./buttons";
import * as styles from "./navbar-styles.scss";

export const Navbar: React.FC<any> = () => {
  return (
    <nav className={styles.asideNavbar}>
      <a href="/">
        <NavbarButton text="Home">
          <HomeIcon />
        </NavbarButton>
      </a>
      <NavbarButton text="Search">
        <SearchIcon />
      </NavbarButton>
      <NavbarButton text="Explore">
        <ExploreIcon />
      </NavbarButton>
      <NavbarButton text="Reels">
        <ReelsIcon />
      </NavbarButton>
      <NavbarButton text="Messages">
        <MessagesIcon />
      </NavbarButton>
      <NavbarButton text="Notifications">
        <NotificationsIcon />
      </NavbarButton>
      <NavbarButton text="Create">
        <CreateIcon />
      </NavbarButton>
      <NavbarButton text="Profile">
        <img src={"/assets/profile-image.png"} alt="user profile image" />
      </NavbarButton>
      <NavbarButton
        text="Menu"
        htmlAttr={{
          onClick: () => {
            console.log("clicado");
          },
        }}
      >
        <MenuIcon />
      </NavbarButton>
    </nav>
  );
};
