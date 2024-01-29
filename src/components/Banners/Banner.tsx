import { CSSProperties } from "react";
import classes from "./Banner.module.scss";

function Banner(props: { banner_info: IBanner; button: JSX.Element; style?: CSSProperties }) {
  return (
    <section className={classes.banner} style={props.style}>
      <img src={props.banner_info.illustration} className={classes.illustration}/>
      <div className={classes.text_box}>
        <div className={classes.header_text}>{props.banner_info.header}</div>
        <hr
          className={
            props.banner_info.divider ? classes.divider : classes.d_none
          }
        />
        <div className={classes.description_text}>{props.banner_info.description}</div>
        {props.button}
      </div>
    </section>
  );
}

export default Banner;
