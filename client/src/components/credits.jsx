import React, { useState, useEffect } from "react";
import AuthorCard from "./authorCard";
import { getAuthors } from "../services/authorService";

const Credits = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await getAuthors();
      setAuthors(data);
    };
    fetch();
  }, []);

  return (
    // Aerolito
    // Authors
    <section className="section">
      {authors.map(author => (
        <AuthorCard key={author._id} author={author} />
      ))}
    </section>
    // Others
  );
};

export default Credits;
