import * as React from "react";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import styles from "./LogoutButton.module.scss";
import { signOut } from "../../common/api/services/UserService";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut().then(() => navigate("/"));
  };

  return (
    <div className={styles.container} onClick={handleLogout}>
      Logout
      <BiLogOut onClick={handleLogout} />
    </div>
  );
};

export default LogoutButton;
