import React from "react";
import Article from "../components/Article";
const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum delectus incidunt unde qui expedita voluptas minus, debitis nesciunt adipisci rem tempore deleniti ipsam quam aspernatur dolorem dolorum sed nisi porro."
  },
  {
    id: 2,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum delectus incidunt unde qui expedita voluptas minus, debitis nesciunt adipisci rem tempore deleniti ipsam quam aspernatur dolorem dolorum sed nisi porro."
  },
  {
    id: 3,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum delectus incidunt unde qui expedita voluptas minus, debitis nesciunt adipisci rem tempore deleniti ipsam quam aspernatur dolorem dolorum sed nisi porro."
  }
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));

  return <div className="home">{artList}</div>;
};

export default HomePage;
