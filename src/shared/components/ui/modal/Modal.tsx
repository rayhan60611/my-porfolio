import { FC, useRef } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import { CSSTransition } from "react-transition-group";

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
  footer?: JSX.Element;
  onCancel(): void;
  show: boolean;
}

const Modal: FC<Props> = ({
  title,
  closeIcon = true,
  classes,
  onCancel,
  show,
  footer,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return createPortal(
    <>
      {show && <div className={`${styles.BackDrop}`} onClick={onCancel} />}
      <CSSTransition
        nodeRef={ref}
        in={show}
        classNames={{
          enter: styles.WrapperEnter,
          enterActive: styles.WrapperEnterActive,
          exit: styles.WrapperExit,
          exitActive: styles.WrapperExitActive,
        }}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        <div
          ref={ref}
          className={`${styles.Wrapper}${classNameGenerator(
            classes?.wrapper
          )} bx-sh`}
        >
          {title && (
            <header
              className={`${styles.Header}${classNameGenerator(
                classes?.header
              )}`}
            >
              <h1>{title}</h1>
              {closeIcon && (
                <span className={`${styles.CloseIcon}`} onClick={onCancel}>
                  <FiX />
                </span>
              )}
            </header>
          )}
          <div className={`${styles.Body}${classNameGenerator(classes?.body)}`}>
            {children}
          </div>
          {footer && (
            <footer
              className={`${styles.Footer}${classNameGenerator(
                classes?.footer
              )}`}
            >
              {footer}
            </footer>
          )}
        </div>
      </CSSTransition>
    </>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
