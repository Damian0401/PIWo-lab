import * as React from 'react';
import { IInputProps } from './IInputProps';
import styles from './Input.module.scss';

const Input = (props: IInputProps) => {
    const {
        type, name,
        value, label,
        required, disabled,
        onChange
    } = props;

    return (
        <div className={styles.container}>
            <label htmlFor={name}>
                {label}
            </label>
            <input
                type={type} name={name}
                id={name} value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
            />
        </div>
    );
}

export default Input;