import { ChangeEvent, RefObject } from "react";

export interface IInputProps {
    value?: string | number;
    name: string;
    type?: string;
    label: string;
    required?: boolean;
    disabled?: boolean;
    ref?: RefObject<HTMLInputElement>;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}