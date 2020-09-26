import React from "react";
import { Link } from "react-router-dom";

const Participants = ({ participants, others }) => {
  const lastIndex = participants?.length - 1;

  const getSeparator = index => {
    let separator;

    if (others) {
      if (index <= lastIndex - 1) {
        separator = ", ";
      } else {
        separator = "";
      }
    } else {
      if (index < lastIndex - 1) {
        separator = ", ";
      } else if (index === lastIndex - 1) {
        separator = " e ";
      } else {
        separator = " ";
      }
    }

    return separator;
  };

  const result = participants?.map((author, index) => (
    <span key={author._id}>
      <Link
        className="serie-detail-author"
        to={`/series?authorId=${author._id}`}>
        {author.name}
      </Link>
      {getSeparator(index)}
    </span>
  ));

  return (
    <span>
      {result}
      <span>{others}</span>
    </span>
  );
};

export default Participants;
