import { FiArrowDown } from "react-icons/fi";

import img from "../../../../assets/images/my-image2.png";
import Headline from "./Headline";
// import MyImage from "./MyImage";
import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <section className={`${styles.Root}`}>
      <div className={`${styles.Background}`}>
        <img src={img} alt="my-profile" />
        {/* <MyImage /> */}
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
