import { CSSProperties } from "react";
import classes from "./Footer.module.scss";
import AppStrings from "../../strings";
import AppImages from "../../images";

function Footer(props: {
  content: { [header: string]: INavigationLink[] };
  style?: CSSProperties;
}) {
  const getColumn = (key: string, value: INavigationLink[]) => {
    return (
      <div className={classes.column}>
        <h1 className={classes.header_text}>{key}</h1>
        <ul className={classes.column_info}>
          {value.map((navLink) => (
            <li className={classes.element}>
              <a href={navLink.link} className={classes.description_text}>
                {navLink.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <footer className={classes.footer}>
      <div className={classes.company_info}>
        <div className={classes.logo}>
          <img src={AppImages.white_logo} className={classes.logo_img} />
          <h1 className={classes.logo_text}>{AppStrings.service_name}</h1>
        </div>
        <p className={classes.description_text}>{AppStrings.app_description}</p>
        <p className={classes.description_text}>{AppStrings.copyright}</p>
      </div>
      {Object.entries(props.content).map(([key, value]) => {
        return getColumn(key, value);
      })}
    </footer>
  );
}

export default Footer;
