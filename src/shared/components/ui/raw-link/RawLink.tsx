import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import { classNameGenerator } from "../../../utils";
import styles from "./RawLink.module.css";

const RawLink: FC<LinkProps> = ({ children, className, ...props }) => {
  return (
    <Link
      className={`${classNameGenerator(className)}${styles.Root}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default RawLink;
