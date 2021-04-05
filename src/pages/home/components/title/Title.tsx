import { CSSProperties, FC } from "react";

import { classNameGenerator } from "../../../../shared/utils";
import styles from "./Title.module.css";

const style: CSSProperties = { visibility: "hidden", fontSize: "2rem" };

interface Props {
  children: string;
  className?: string;
}

const Title: FC<Props> = ({ className, children }) => {
  return (
    <h2 className={`${styles.Root}${classNameGenerator(className)}`}>
      {children.split("").map((value, index) => (
        <span key={index} style={value === "_" ? style : undefined}>
          {value}
        </span>
      ))}
    </h2>
  );
};

export default Title;
