import {
  ChangeEvent,
  FocusEvent,
  InputHTMLAttributes,
  forwardRef,
  RefObject,
} from "react";

import styles from "./Input.module.css";

interface IClass {
  container?: string;
  root?: string;
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  classes?: IClass;
  type?: "text" | "number" | "email" | "password" | "search" | "multiline";
  rows?: number;
  valid?: boolean;
  textAreaRef?: RefObject<HTMLTextAreaElement>;
  onChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void;
  onFocus?(
    e: FocusEvent<HTMLInputElement> | FocusEvent<HTMLTextAreaElement>
  ): void;
  onBlur?(
    e: FocusEvent<HTMLInputElement> | FocusEvent<HTMLTextAreaElement>
  ): void;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      classes,
      rows = 5,
      type = "text",
      valid = true,
      textAreaRef,
      onChange,
      onFocus,
      onBlur,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`${styles.Container} ${classes?.container || ""}`}>
        {type === "multiline" ? (
          <textarea
            ref={textAreaRef}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={rest.placeholder}
            rows={rows}
            className={`${styles.Root} ${classes?.root || ""}`}
          />
        ) : (
          <input
            ref={ref}
            {...rest}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            type={type}
            className={`${styles.Root} ${classes?.root || ""}`}
          />
        )}
        <label
          className={`${styles.Label} ${!valid ? styles.Error : ""}`}
          htmlFor={rest.id}
        />
      </div>
    );
  }
);

export default Input;
