import classes from "./SliderCard.module.scss";

function SliderCard(props: { slider_card: ISliderCard }) {
  return (
    <div className={classes.slider_card}>
      <h1 className={`${classes.header_text} ${classes.h1_header}`}>
        {props.slider_card.header}
      </h1>
      <hr className={classes.divider} />
      <div className={classes.information_block}>
        <div className={classes.user}>
          <div className={classes.circle_image}>
            <img
              src={props.slider_card.user.user_photo}
              className={classes.user_photo}
            />
          </div>
          <div className={classes.user_info}>
            <h2 className={`${classes.header_text} ${classes.h2_header}`}>
              {props.slider_card.user.user_name}
            </h2>
            <p
              className={`${classes.description_text} ${classes.p2_description}`}
            >
              {props.slider_card.user.user_position}
            </p>
          </div>
        </div>
        <p className={`${classes.description_text} ${classes.p1_description}`}>
          {props.slider_card.description}
        </p>
      </div>
    </div>
  );
}

export default SliderCard;
