import * as React from "react";
import styles from "./Register.module.scss";
import controls from "../../assets/styles/controls.module.scss";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent } from "react";
import Input from "../../components/input/Input";
import { nameof } from "ts-simple-nameof";
import { IRegister } from "../../common/interfaces";
import { toast } from "react-toastify";

const Register = () => {
  const [registerValues, setRegisterValues] = React.useState<IRegister>({
    email: "",
    displayName: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (registerValues.password !== registerValues.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    navigate("/");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;
    setRegisterValues({ ...registerValues, [name]: value });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Input
        label="Email"
        name={nameof<IRegister>((u) => u.email)}
        type="email"
        value={registerValues.email}
        required
        onChange={handleChange}
      />
      <Input
        label="DisplayName"
        name={nameof<IRegister>((u) => u.displayName)}
        type="text"
        value={registerValues.displayName}
        required
        onChange={handleChange}
      />
      <Input
        label="Password"
        name={nameof<IRegister>((u) => u.password)}
        type="password"
        value={registerValues.password}
        required
        onChange={handleChange}
      />
      <Input
        label="ConfirmPassword"
        name={nameof<IRegister>((u) => u.confirmPassword)}
        type="password"
        value={registerValues.password}
        required
        onChange={handleChange}
      />
      <div className={styles.buttons}>
        <button className={controls.button} type="submit">
          Register
        </button>
        <button className={controls.button} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Register;
