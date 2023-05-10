import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../common/state/user/userActions";
import { BiLogOut } from "react-icons/bi";
import styles from "./LogoutButton.module.scss";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className={styles.container} onClick={handleLogout}>
      Logout
      <BiLogOut onClick={handleLogout} />
    </div>
  );
};

export default LogoutButton;
