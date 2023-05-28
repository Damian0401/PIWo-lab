import { ChangeEvent, RefObject } from "react";

export interface IInputProps {
    value?: string | number;
    name: string;
    type?: "text" | "number" | "password" | "email";
    label: string;
    required?: boolean;
    disabled?: boolean;
    ref?: RefObject<HTMLInputElement>;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}