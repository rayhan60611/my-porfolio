import ROUTES from "../../../../shared/utils/routes";
import img from "../../../../assets/images/my-image.jpg";
import img1 from "../../../../assets/images/my-image1.jpg";
import Button from "../../../../shared/components/ui/button/Button";
import RawLink from "../../../../shared/components/ui/raw-link/RawLink";
import Description from "../description/Description";
import Title from "../title/Title";
import ProjectCard from "./project-card/ProjectCard";
import styles from "./Portfolio.module.css";

const data = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: "hello",
  subTitle: "Subtitle",
  techniques: ["Skills", "Skills", "Skills", "Skills", "Skills", "Skills"],
  images: [i % 2 === 0 ? img : img1, img, img],
  link: "3",
}));

const Portfolio = () => {
  return (
    <section className={`${styles.Root}`}>
      <Title>My_Portfolio</Title>
      <Description>
        These are my latest works. Some was made for practicing purpose and some
        was made for job purpose. If you want to discover more works, please
        visit <RawLink to={ROUTES["work"].path}>here</RawLink>.
      </Description>
      <Button>See More!</Button>
      <div className={`${styles.Projects}`}>
        {data.map(({ id, title, subTitle, techniques, images, link }) => (
          <ProjectCard
            key={id}
            title={title}
            subTitle={subTitle}
            techniques={techniques}
            images={images}
            link={link}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
