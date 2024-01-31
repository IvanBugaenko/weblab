import { CSSProperties, useState } from "react";
import classes from "./Articles.module.scss";
import ArticleCard from "./ArticleCard/ArticleCard";
import Button from "../Buttons/Button";

function Articles(props: {
  header: string;
  articles: IArticleCard[];
  buttons: IButton[];
  style?: CSSProperties;
}) {
  const [isCollapsed, changeCollapsed] = useState(true);

  const collapsedHandle = () => {
    changeCollapsed(!isCollapsed);
  };

  const collapsedButton = (
    <Button button_info={props.buttons[0]} onClick={collapsedHandle} />
  );
  const uncollapsedButton = (
    <Button button_info={props.buttons[1]} onClick={collapsedHandle} />
  );

  const getArticleCards = (articles: IArticleCard[]) => {
    return articles.map((article_card) => (
      <ArticleCard article_card={article_card} />
    ));
  };

  return (
    <section className={classes.articles} style={props.style}>
      <h1 className={classes.header_text}>{props.header}</h1>
      <hr className={classes.divider} />
      <div className={classes.article_cards}>
        {getArticleCards(
          isCollapsed ? props.articles.slice(0, 3) : props.articles
        )}
      </div>
      {isCollapsed ? collapsedButton : uncollapsedButton}
    </section>
  );
}

export default Articles;
