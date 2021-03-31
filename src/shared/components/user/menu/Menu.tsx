import Logo from "../../ui/logo/Logo";
import ROUTES from "../../../utils/routes";
import NavItem from "./NavItem";
import styles from "./Menu.module.css";

const Menu = () => {
  
  return (
    <menu className={`${styles.Root}`}>
      <header className={`${styles.Head}`}>
        <Logo />
      </header>
      <nav className={`${styles.Nav}`}>
        <ul className={`${styles.NavItems}`}>
          {Object.keys(ROUTES).map((route) => (
            <NavItem key={ROUTES[route].name} route={ROUTES[route]} />
          ))}
        </ul>
      </nav>
    </menu>
  );
};

export default Menu;
