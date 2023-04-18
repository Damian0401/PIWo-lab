import { ChangeEvent } from "react";

export interface IInputProps {
    value: string | number;
    name: string;
    type?: string;
    label: string;
    required?: boolean;
    disabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}