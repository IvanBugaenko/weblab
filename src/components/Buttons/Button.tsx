import classes from "./Button.module.scss";

function Button(props: { button_info: IButton, onClick?: () => void }) {
  return (
    <button
    onClick={props.onClick}
      className={`${classes.button} ${
        props.button_info.filling
          ? classes.with_filling
          : classes.without_filling
      }`}
    >
      {props.button_info.text}
    </button>
  );
}

export default Button;
