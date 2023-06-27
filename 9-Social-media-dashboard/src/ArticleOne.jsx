import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaYoutube,
  FaAngleUp,
} from "react-icons/fa";

const ArticleOne = ({
  icon,
  user,
  number,
  followers,
  today,
  border,
  toggle,
}) => {
  return (
    <article
      className={`${toggle ? "article-one article-dark " : "article-one"}`}
      style={{ borderTop: `5.5px solid ${border}` }}
    >
      <div className="art-one">
        {icon}
        <span className="at">{user}</span>
      </div>
      <h2 className={`${toggle ? "number white" : "number "}`}>{number}</h2>
      <h4 className="followers">{followers}</h4>
      <div className="art-two">
        <FaAngleUp className="arrow" />
        <h4 className="today">{today}</h4>
      </div>
    </article>
  );
};

export default ArticleOne;
