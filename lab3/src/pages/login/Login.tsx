import * as React from "react";
import styles from "./Login.module.scss";
import controls from "../../assets/styles/controls.module.scss";
import {
  signInWithEmail,
  signInWithGithub,
  signInWithGoogle,
} from "../../common/api/services/UserService";
import { useNavigate } from "react-router-dom";
import { UserCredential } from "firebase/auth";
import LoginForm from "./components/form/LoginForm";
import { ILogin } from "../../common/interfaces";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [isFormVisible, setIsFormVisible] = React.useState<boolean>(false);

  const handleExternalLogin = (loginMethod: () => Promise<UserCredential>) => {
    loginMethod().then(() => navigate("/"));
  };

  const handleEmailLogin = async (loginValues: ILogin) => {
    try {
      await signInWithEmail(loginValues.email, loginValues.password).then(
        () => {
          navigate("/");
        }
      );
    } catch (error) {
      toast.error("Invalid email or password!");
    }
  };

  const toggleEmailLogin = () => {
    setIsFormVisible(!isFormVisible);
  };

  if (isFormVisible)
    return (
      <LoginForm onSubmit={handleEmailLogin} onCancel={toggleEmailLogin} />
    );

  return (
    <div className={styles.container}>
      <h1>Select login method:</h1>
      <button
        onClick={() => handleExternalLogin(signInWithGoogle)}
        className={controls.button}
      >
        Google
      </button>
      <button
        onClick={() => handleExternalLogin(signInWithGithub)}
        className={controls.button}
      >
        Github
      </button>
      <button onClick={toggleEmailLogin} className={controls.button}>
        Email
      </button>
    </div>
  );
};

export default Login;
