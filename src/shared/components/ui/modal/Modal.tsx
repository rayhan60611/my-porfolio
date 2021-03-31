import { FC } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

import { classNameGenerator } from "../../../utils";
import styles from "./Modal.module.css";

interface Props {
  readonly classes?: {
    readonly wrapper?: string;
    readonly header?: string;
    readonly body?: string;
    readonly footer?: string;
  };
  readonly title?: string;
  readonly closeIcon?: boolean;
}

const Modal: FC<Props> = ({ title, closeIcon = true, classes, children }) => {
  return createPortal(
    <div
      className={`${styles.Root}`}
      onClick={() => console.log("modal Clicked")}
    >
      <div
        className={`${styles.Wrapper}${classNameGenerator(
          classes?.wrapper
        )} bx-sh`}
      >
        {title && (
          <header
            className={`${styles.Header}${classNameGenerator(classes?.header)}`}
          >
            <h1>{title}</h1>
            {closeIcon && (
              <span className={`${styles.CloseIcon}`}>
                <FiX />
              </span>
            )}
          </header>
        )}
        <section
          className={`${styles.Body}${classNameGenerator(classes?.body)}`}
        >
          {children}
        </section>
        <footer
          className={`${styles.Footer}${classNameGenerator(classes?.footer)}`}
        >
          footer
        </footer>
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
