import { CSSProperties } from "react";
import classes from "./Services.module.scss";
import ServiceCard from "./ServiceCard/ServiceCard";

function Services(props: {
  header: string;
  description: string;
  active_services: IServiceCard[];
  button: JSX.Element;
  style?: CSSProperties;
}) {
  const getServiceCards = (active_services: IServiceCard[]) => {
    return active_services.map((service_card) => (
      <ServiceCard service_card={service_card} />
    ));
  };

  return (
    <section className={classes.services} style={props.style}>
      <h1 className={classes.header_text}>{props.header}</h1>
      <hr className={classes.divider} />
      <p className={classes.description_text}>{props.description}</p>
      <div className={classes.service_cards}>{getServiceCards(props.active_services)}</div>
      {props.button}
    </section>
  );
}

export default Services;
