import { ButtonHTMLAttributes, forwardRef } from "react";

import styles from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  block?: boolean;
  disabled?: boolean;
  pending?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      block = false,
      pending = false,
      disabled = false,
      children,
      ...rest
    },
    ref
  ) => {
    if (pending) {
      disabled = true;
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        {...rest}
        className={`${styles.Root} ${className || ""} ${
          block ? styles.Block : ""
        } ${pending ? styles.Pending : ""}`}
      >
        {pending && <span className={`${styles.PendingBlock}`} />}
        {children}
      </button>
    );
  }
);

export default Button;
