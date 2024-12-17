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
import { Link } from "react-router-dom";

export const Navbar: React.FC<any> = () => {
  return (
    <nav className={styles.asideNavbar}>
      <Link to="/">
        <NavbarButton text="Home">
          <HomeIcon />
        </NavbarButton>
      </Link>
      <NavbarButton
        text="Search"
        htmlAttr={{
          onClick: () => {
            console.log("abrir search bar");
          },
        }}
      >
        <SearchIcon />
      </NavbarButton>
      <Link to="/explore">
        <NavbarButton text="Explore">
          <ExploreIcon />
        </NavbarButton>
      </Link>
      <Link to="/reels">
        <NavbarButton text="Reels">
          <ReelsIcon />
        </NavbarButton>
      </Link>
      <Link to="/messages">
        <NavbarButton text="Messages">
          <MessagesIcon />
        </NavbarButton>
      </Link>
      <Link to="/notifications">
        <NavbarButton text="Notifications">
          <NotificationsIcon />
        </NavbarButton>
      </Link>
      <Link to="/create">
        <NavbarButton text="Create">
          <CreateIcon />
        </NavbarButton>
      </Link>
      <Link to="/profile">
        <NavbarButton text="Profile">
          <img src={"/assets/profile-image.png"} alt="user profile image" />
        </NavbarButton>
      </Link>
      <NavbarButton
        text="More"
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
