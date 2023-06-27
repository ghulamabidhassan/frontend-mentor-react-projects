import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaYoutube,
  FaAngleUp,
} from "react-icons/fa";

const ArticleTwo = ({
  views,
  count,
  icon,
  today,
  color,
  direction,
  toggle,
}) => {
  return (
    <article
      className={`${toggle ? "article-two article-dark" : "article-two "}`}
    >
      <div className="art-two-div-one">
        <h4 className="views">{views}</h4>
        {icon}
      </div>
      <div className="art-two-div-two">
        <h2 className={`${toggle ? "count white" : "count "}`}>{count}</h2>
        <span className={`${color}`}>
          <FaAngleUp className={`${direction}`} /> {today} %
        </span>
      </div>
    </article>
  );
};

export default ArticleTwo;
