import { CSSProperties } from "react";
import classes from "./Footer.module.scss";

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
          <img
            src="src\assets\images\logo\logo_white.png"
            className={classes.logo_img}
          />
          <h1 className={classes.logo_text}>{"HealthCare"}</h1>
        </div>
        <p className={classes.description_text}>
          {
            "HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone"
          }
        </p>
        <p className={classes.description_text}>
          {"©HealthCare PTY LTD 2023. All rights reserved"}
        </p>
      </div>
      {Object.entries(props.content).map(([key, value]) => {
        return getColumn(key, value);
      })}
    </footer>
  );
}

export default Footer;
