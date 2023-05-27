import * as React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import ThemeToggle from "../theme-toggle/ThemeToggle";
import { useSelector } from "react-redux";
import { RootState } from "../../common/state/store";
import LogoutButton from "../logout-button/LogoutButton";
import { useAuth } from "../../common/api/services/userService";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <h1>Real Estate</h1>
        </Link>
      </div>
      <div className={styles.menu}>
        <p>{user?.displayName || user?.email}</p>
        <Link to="/">All</Link>
        {user ? (
          <>
            <Link to="/estate/favorites">Favorites</Link>
            <Link to="/estate/add">Add New</Link>
            <LogoutButton />
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
