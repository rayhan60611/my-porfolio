import { FC } from "react";

import { classNameGenerator } from "../../../../shared/utils";
import styles from "./Description.module.css";

interface Props {
  className?: string;
}

const Description: FC<Props> = ({ className, children }) => {
  return (
    <p className={`${styles.Root}${classNameGenerator(className)}`}>
      {children}
    </p>
  );
};

export default Description;
