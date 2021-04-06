import { FC, useState } from "react";

import Button from "../../../../../shared/components/ui/button/Button";
import Modal from "../../../../../shared/components/ui/modal/Modal";
import styles from "./ProjectCard.module.css";

interface Props {
  title: string;
  subTitle: string;
  techniques: string[];
  images: string[];
  link: string;
}

const ProjectCard: FC<Props> = ({
  title,
  subTitle,
  techniques,
  images,
  link,
}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <Modal show={show} onCancel={() => setShow(false)}></Modal>
      <div className={`${styles.Root}`}>
        <div className={`${styles.Upper}`}>
          <img src={images[0]} alt={title} className={`${styles.Img}`} />
        </div>
        <article className={`${styles.Inner}`}>
          <h3 className={`${styles.Title}`}>{title}</h3>
          <h5 className={`${styles.SubTitle}`}>{subTitle}</h5>
          <div className={`${styles.Technologies}`}>
            {techniques.map((value, index) => (
              <span className={`${styles.Pill}`} key={index}>
                {value}
              </span>
            ))}
          </div>
          <Button className={`${styles.Btn}`} onClick={() => setShow(true)}>
            View
          </Button>
        </article>
      </div>
    </>
  );
};

export default ProjectCard;
