import { IMessage } from "../../../../../common/interfaces";

export interface IBookModalProps {
    onClose: () => void;
    onSend: (message: IMessage) => void;
}