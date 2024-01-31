import classes from "./ArticleCard.module.scss";

function ArticleCard(props: { article_card: IArticleCard }) {
  return (
    <div className={classes.article_card}>
      <img src={props.article_card.cover} className={classes.cover}></img>
      <div className={classes.text_block}>
        <h1 className={classes.header_text}>{props.article_card.header}</h1>
        <p className={classes.description_text}>
          {props.article_card.description}
        </p>
        <button className={classes.link}>Read more →</button>
      </div>
    </div>
  );
}

export default ArticleCard;
