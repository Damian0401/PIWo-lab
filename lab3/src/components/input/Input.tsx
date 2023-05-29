import * as React from "react";
import { IInputProps } from "./IInputProps";
import styles from "./Input.module.scss";

const Input = (props: IInputProps) => {
  const {
    type,
    name,
    value,
    label,
    required,
    disabled,
    ref,
    onChange,
    placeholder,
  } = props;

  return (
    <div className={styles.container}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        ref={ref}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
