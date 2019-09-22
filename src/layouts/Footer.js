import React from "react";
import "../styles/Footer.css";
import { Route } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Route
        path="/"
        exact
        render={props => {
          return <p>Jesteś na stronie głównej</p>;
        }}
      />
      <Route
        path="/:page"
        exact
        render={props => {
          console.log(props);
          return (
            <p>
              Jesteś na stronie:
              <span className="adresPageFoter"> {props.match.url}</span>
            </p>
          );
        }}
      />
    </div>
  );
};

export default Footer;
