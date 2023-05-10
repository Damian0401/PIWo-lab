import * as React from "react";
import { IBookModalProps } from "./IBookModalProps";
import { useState } from "react";
import styles from "./BookModal.module.scss";
import controls from "../../../../../assets/styles/controls.module.scss";
import Input from "../../../../../components/input/Input";

const BookModal = ({ onClose, onSend }: IBookModalProps) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  const handleSend = () => {
    onSend({ email: "test", message: "test" });
    onClose();
  };

  const handleContentClick = (
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation();
  };

  const isSendDisabled = !email || !message;

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.content} onClick={handleContentClick}>
        <h1>Test</h1>
        <textarea
          placeholder="Message"
          rows={5}
          value={message}
          onChange={handleMessageChange}
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
