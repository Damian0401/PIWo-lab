import { ILogin } from "../../../../common/interfaces";

export interface ILoginFormProps {
    onSubmit: (values: ILogin) => void;
    onCancel: () => void;    
}