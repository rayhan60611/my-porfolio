import { CSSProperties, Fragment } from "react";
import { useHistory } from "react-router";
import { FiLinkedin, FiGithub } from "react-icons/fi";

import ROUTES from "../../../../shared/utils/routes";
import Button from "../../../../shared/components/ui/button/Button";
import styles from "./Introduction.module.css";

const style: CSSProperties = { visibility: "hidden", fontSize: "2rem" };

const Headline = () => {
  const { push } = useHistory();

  const data = "Hi,I_am_Tuhin".split("").map((value, index) => (
    <Fragment key={index}>
      <span style={value === "_" ? style : undefined}>{value}</span>
      {value === "," && <br />}
    </Fragment>
  ));

  return (
    <div className={`${styles.Headline}`}>
      <h1>{data}</h1>
      <p className={`${styles.Designation}`}>
        Full Stack Developer / Cross Platform Mobile Application Developer
      </p>
      <Button
        className={`${styles.Btn}`}
        onClick={() => {
          push(ROUTES["contact"].path);
        }}
      >
        Contact Me!
      </Button>
      <div className={`${styles.SocialLinks}`}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/md-tuhin-saud-149908194"
          rel="noreferrer"
          className={`${styles.SocialLink}`}
        >
          <FiLinkedin />
        </a>
        <a
          target="_blank"
          href="https://www.github.com/tuhinsaud4614"
          rel="noreferrer"
          className={`${styles.SocialLink}`}
        >
          <FiGithub />
        </a>
      </div>
    </div>
  );
};

export default Headline;
