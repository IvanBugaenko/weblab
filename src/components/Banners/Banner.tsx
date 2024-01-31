import { CSSProperties } from "react";
import classes from "./Banner.module.scss";

function Banner(props: { banner_info: IBanner; component?: JSX.Element; style?: CSSProperties }) {
  return (
    <section className={classes.banner} style={props.style}>
      <img src={props.banner_info.illustration} className={classes.illustration}/>
      <div className={classes.text_box}>
        <h2 className={classes.header_text}>{props.banner_info.header}</h2>
        <hr
          className={
            props.banner_info.divider ? classes.divider : classes.d_none
          }
        />
        <p className={classes.description_text}>{props.banner_info.description}</p>
        {props.component}
      </div>
    </section>
  );
}

export default Banner;
