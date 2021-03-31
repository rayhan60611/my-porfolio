import { IconType } from "react-icons";
import { FiHome, FiUser, FiSettings, FiEye, FiMail } from "react-icons/fi";

export interface IRoute {
  name: string;
  path: string;
  icon: IconType;
  hiddenable: boolean;
}

const ROUTES: { [key: string]: IRoute } = {
  home: {
    name: "Home",
    path: "/",
    icon: FiHome,
    hiddenable: false,
  },
  about: {
    name: "About",
    path: "/about",
    icon: FiUser,
    hiddenable: false,
  },
  skills: {
    name: "Skills",
    path: "/skills",
    icon: FiSettings,
    hiddenable: false,
  },
  work: {
    name: "Works",
    path: "/works",
    icon: FiEye,
    hiddenable: false,
  },
  contact: {
    name: "Contact",
    path: "/contact",
    icon: FiMail,
    hiddenable: true,
  },
};

export default ROUTES;
