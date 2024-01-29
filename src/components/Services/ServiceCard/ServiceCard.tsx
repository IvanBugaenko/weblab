import classes from "./ServiceCard.module.scss";

function ServiceCard(props: { service_card: IServiceCard }) {
  return (
    <div className={classes.service_card}>
      <img src={props.service_card.icon} className={classes.icon}/>
      <h1 className={classes.header_text}>{props.service_card.header}</h1>
      <p className={classes.description_text}>{props.service_card.description}</p>
    </div>
  );
}

export default ServiceCard;
