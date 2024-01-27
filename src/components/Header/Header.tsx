import Navigation from "./Navigation/Navigation";
import classes from './Header.module.scss';

function Header(props: { name: string; buttons: INavigationLink[] }) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src="src\assets\images\logo\logo.png" alt="logo" className={classes.logo_img}/>
        <span className={classes.logo_text}>{props.name}</span>
      </div>
      <Navigation buttons={props.buttons} />
    </header>
  );
}

export default Header;
