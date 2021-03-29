import { ChangeEvent, FC, FocusEvent, InputHTMLAttributes } from "react";

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

const Input: FC<Props> = ({
  classes,
  rows = 5,
  type = "text",
  valid = true,
  onChange,
  onFocus,
  onBlur,
  ...rest
}) => {
  return (
    <div className={`${styles.Container} ${classes?.container || ""}`}>
      {type === "multiline" ? (
        <textarea
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={rest.placeholder}
          rows={rows}
          className={`${styles.Root} ${classes?.root || ""}`}
        />
      ) : (
        <input
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
};

export default Input;
