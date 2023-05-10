import * as React from "react";
import styles from "./Login.module.scss";
import controls from "../../assets/styles/controls.module.scss";
import Input from "../../components/input/Input";
import { ChangeEvent, FormEvent, useState } from "react";
import { IUser } from "../../interfaces/IUser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { nameof } from "ts-simple-nameof";
import { useDispatch } from "react-redux";
import { login } from "../../common/state/user/userActions";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<IUser>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const users: IUser[] = [
    {
      email: "sample@test.com",
      password: "test123",
    },
    {
      email: "test@test.com",
      password: "test123",
    },
    {
      email: "example@test.com",
      password: "test123",
    },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const isUser = users.find(
      (u) => u.email === user.email && u.password === user.password
    );
    if (!isUser) {
      toast.error("Invalid credentials!");
      return;
    }
    dispatch(login(user));
    navigate("/");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <Input
          label="Email"
          name={nameof<IUser>((u) => u.email)}
          type="email"
          value={user.email}
          required={true}
          onChange={handleChange}
        />
        <Input
          label="Password"
          name={nameof<IUser>((u) => u.password)}
          type="password"
          value={user.password}
          required={true}
          onChange={handleChange}
        />
        <button className={controls.button} type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
