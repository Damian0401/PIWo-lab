import * as React from "react";
import { ILogin } from "../../../../common/interfaces";
import { useState } from "react";
import Input from "../../../../components/input/Input";
import { nameof } from "ts-simple-nameof";
import controls from "../../../../assets/styles/controls.module.scss";
import styles from "./LoginForm.module.scss";
import { ILoginFormProps } from "./ILoginFormProps";

const LoginForm: React.FC<ILoginFormProps> = (props) => {
  const { onSubmit, onCancel } = props;

  const [loginValues, setLoginValues] = useState<ILogin>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(loginValues);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <Input
        label="Email"
        name={nameof<ILogin>((l) => l.email)}
        value={loginValues.email}
        onChange={handleChange}
        type="email"
        required
      />
      <Input
        label="Password"
        name={nameof<ILogin>((l) => l.password)}
        value={loginValues.password}
        onChange={handleChange}
        type="password"
        required
      />
      <div className={styles.buttons}>
        <button className={controls.button} type="submit">
          Login
        </button>
        <button className={controls.button} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
