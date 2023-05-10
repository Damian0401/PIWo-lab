import * as React from "react";
import { IBookModalProps } from "./IBookModalProps";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./BookModal.module.scss";
import controls from "../../../../../assets/styles/controls.module.scss";
import Input from "../../../../../components/input/Input";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../common/state/store";

const BookModal = ({ onClose, onSend }: IBookModalProps) => {
  const { user } = useSelector((state: RootState) => state.userState);
  const [email, setEmail] = useState(user?.email || "");
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messageInputRef.current?.focus();
  }, []);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleSend = () => {
    onSend({ email: email, message: messageInputRef.current?.value || "" });
    onClose();
  };

  const handleContentClick = (
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation();
  };

  const isSendDisabled = !email || !messageInputRef.current?.value;

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.content} onClick={handleContentClick}>
        <h1>Contact form</h1>
        <textarea
          placeholder="Message"
          rows={5}
          ref={messageInputRef}
          className={controls.textarea}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <div className={styles.contentButtons}>
          <button
            onClick={handleSend}
            disabled={isSendDisabled}
            className={controls.button}
          >
            Send
          </button>
          <button onClick={onClose} className={controls.button}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
