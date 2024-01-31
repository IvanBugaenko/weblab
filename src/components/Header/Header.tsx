import Navigation from "./Navigation/Navigation";
import classes from "./Header.module.scss";
import AppStrings from "../../strings";
import AppImages from "../../images";

function Header(props: { buttons: INavigationLink[] }) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={AppImages.logo} className={classes.logo_img} />
        <h1 className={classes.logo_text}>{AppStrings.service_name}</h1>
      </div>
      <Navigation buttons={props.buttons} />
    </header>
  );
}

export default Header;
