import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.scss";

function Navigation(props: { buttons: INavigationLink[] }) {
  const getNavMenu = (buttons: INavigationLink[]) => {
    return buttons.map((button) => (
      <li>
        <NavLink
          to={button.link}
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          {button.text}
        </NavLink>
      </li>
    ));
  };

  return (
    <>
      <nav>
        <ul className={classes.nav_list}>{getNavMenu(props.buttons)}</ul>
      </nav>
    </>
  );
}

export default Navigation;
