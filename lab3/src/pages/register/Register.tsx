import * as React from "react";
import styles from "./Register.module.scss";
import controls from "../../assets/styles/controls.module.scss";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent } from "react";
import Input from "../../components/input/Input";
import { nameof } from "ts-simple-nameof";
import { IRegister } from "../../common/interfaces";
import { toast } from "react-toastify";
import { registerWithEmail } from "../../common/api/services/UserService";

const Register = () => {
  const [registerValues, setRegisterValues] = React.useState<IRegister>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (registerValues.password !== registerValues.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (registerValues.password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    try {
      await registerWithEmail(
        registerValues.email,
        registerValues.password
      ).then(() => {
        toast.success("Registration successful!");
      });
    } catch (error) {
      toast.error("Registration failed!");
    }
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
        value={registerValues.confirmPassword}
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
