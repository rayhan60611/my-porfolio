import Introduction from "./components/introduction/Introduction";
import Portfolio from "./components/portfolio/Portfolio";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${styles.Root}`}>
      <Introduction />
      <Portfolio />
    </div>
  );
};

export default Home;
