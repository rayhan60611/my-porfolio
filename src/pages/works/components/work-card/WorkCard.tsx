import img from "../../../../assets/images/user2.jpg";
import styles from "./WorkCard.module.css";

const WorkCard = () => {
  return (
    <div className={`${styles.Root}`}>
      <img className={`${styles.Img}`} src={img} alt="WorkCard" />
      <div className={`${styles.Cover}`}>
        <a className={`${styles.Link}`} href="www.github.com">
          View
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
