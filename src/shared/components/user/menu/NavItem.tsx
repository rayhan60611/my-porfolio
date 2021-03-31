import { FC } from "react";
import { NavLink } from "react-router-dom";

import { classNameGenerator } from "../../../utils";
import { IRoute } from "../../../utils/routes";
import styles from "./Menu.module.css";

interface Props {
  route: IRoute;
}

const NavItem: FC<Props> = ({ route }) => {
  return (
    <li
      className={`${styles.NavItem}${
        route.hiddenable ? classNameGenerator(styles.NavHidden) : ""
      }`}
    >
      <NavLink
        exact={route.path === "/"}
        className={`${styles.NavLink}`}
        activeClassName={`${styles.NavActive}`}
        to={route.path}
      >
        {<route.icon />}
        {route.name}
      </NavLink>
    </li>
  );
};

export default NavItem;
