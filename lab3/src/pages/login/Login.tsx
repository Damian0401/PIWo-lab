import * as React from "react";
import styles from "./Login.module.scss";
import controls from "../../assets/styles/controls.module.scss";
import {
  signInWithGithub,
  signInWithGoogle,
} from "../../common/api/services/userService";
import { useNavigate } from "react-router-dom";
import { UserCredential } from "firebase/auth";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (loginMethod: () => Promise<UserCredential>) => {
    loginMethod().then(() => navigate("/"));
  };

  return (
    <div className={styles.container}>
      <h1>Select login method</h1>
      <button
        onClick={() => handleLogin(signInWithGoogle)}
        className={controls.button}
      >
        Google
      </button>
      <button
        onClick={() => handleLogin(signInWithGithub)}
        className={controls.button}
      >
        Github
      </button>
    </div>
  );
};

export default Login;
