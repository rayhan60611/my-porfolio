import { Link } from "react-router-dom";

import ROUTES from "../../../../shared/utils/routes";
import Button from "../../../../shared/components/ui/button/Button";
import Description from "../description/Description";
import Title from "../title/Title";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <section className={`${styles.Root}`}>
      <Title>My_Portfolio</Title>
      <Description>
        These are my latest works. Some was made for practicing purpose and some
        was made for job purpose. If you want to discover more works, please
        visit <Link to={ROUTES["work"].path}>here</Link>.
      </Description>
      <Button>See More!</Button>
    </section>
  );
};

export default Portfolio;
