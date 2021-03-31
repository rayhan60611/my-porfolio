import { FC } from "react";

import { classNameGenerator } from "../../../utils";
import { ReactComponent as LogoImg } from "../../../../assets/images/tuhin.svg";
import styles from "./Logo.module.css";

interface Props {
  classes?: {
    root?: string;
    svg?: string;
  };
}

const Logo: FC<Props> = ({ classes }) => {
  return (
    <div className={`${styles.Root}${classNameGenerator(classes?.root)}`}>
      <LogoImg className={`${styles.Svg}${classNameGenerator(classes?.svg)}`} />
    </div>
  );
};

export default Logo;
