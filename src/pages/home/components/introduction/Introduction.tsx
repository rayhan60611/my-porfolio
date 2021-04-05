import { FiArrowDown } from "react-icons/fi";

import Headline from "./Headline";
import MyImage from "./MyImage";
import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <section className={`${styles.Root}`}>
      <div className={`${styles.Background}`}>
        <MyImage />
      </div>
      <Headline />
      <span className={`${styles.DiscoverMe}`}>
        Discover Me
        <FiArrowDown />
      </span>
      <span className={`${styles.DiscoverMe}`}>
        Discover Me
        <FiArrowDown />
      </span>
    </section>
  );
};

export default Introduction;
