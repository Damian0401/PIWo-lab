import * as React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import ThemeToggle from "../theme-toggle/ThemeToggle";
import LogoutButton from "../logout-button/LogoutButton";
import { useAuth } from "../../common/api/services/UserService";
import UpdateDisplayname from "./update-display-name/UpdateDisplayName";

const Navbar = () => {
  const { user, updateDisplayName } = useAuth();

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <h1>Real Estate</h1>
        </Link>
      </div>
      <div className={styles.menu}>
        {user && !user.displayName && (
          <UpdateDisplayname updateDisplayName={updateDisplayName} />
        )}
        <p>{user?.displayName || user?.email}</p>
        <Link to="/">All</Link>
        {user ? (
          <>
            <Link to="/estate/favorites">Favorites</Link>
            <Link to="/estate/add">Add New</Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
