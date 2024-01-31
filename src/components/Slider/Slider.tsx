import { CSSProperties, useState } from "react";
import classes from "./Slider.module.scss";
import clsx from "clsx";
import AppImages from "../../images";

function Slider(props: { slides: JSX.Element[]; style?: CSSProperties }) {
  const n_slide = props.slides.length;
  const [cur, setCur] = useState(0);

  const leftHandle = () => {
    setCur((cur - 1 + n_slide) % n_slide);
  };

  const rightHandle = () => {
    setCur((cur + 1) % n_slide);
  };

  const getDots = (slides: JSX.Element[]) => {
    return slides.map((_, i) => (
      <div
        className={clsx(classes.dot, i === cur && classes.active_dot)}
      ></div>
    ));
  };

  return (
    <section className={classes.slider} style={props.style}>
      {props.slides[cur]}
      <div className={classes.control}>
        <img
          src={AppImages.left_arrow}
          className={classes.arrow}
          onClick={leftHandle}
        />
        {getDots(props.slides)}
        <img
          src={AppImages.right_arrow}
          className={classes.arrow}
          onClick={rightHandle}
        />
      </div>
    </section>
  );
}

export default Slider;
