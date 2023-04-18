import { IMessage } from "../../../../interfaces/IMessage";

export interface IBookModalProps {
    onClose: () => void;
    onSend: (message: IMessage) => void;
}