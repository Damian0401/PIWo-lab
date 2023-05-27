import * as React from "react";
import styles from "./Login.module.scss";
import controls from "../../assets/styles/controls.module.scss";
import {
  signInWithGithub,
  signInWithGoogle,
} from "../../common/api/services/userService";

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Select login method</h1>
      <button onClick={signInWithGoogle} className={controls.button}>
        Google
      </button>
      <button onClick={signInWithGithub} className={controls.button}>
        Github
      </button>
    </div>
  );
};

export default Login;
