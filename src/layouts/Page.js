import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage.js";
import ProductsPage from "../pages/ProductsPage.js";
import ContactPage from "../pages/ContactPage.js";
import AdminPage from "../pages/AdminPage.js";
import ErrorPage from "../pages/ErrorPage.js";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/products" exact component={ProductsPage}></Route>
        <Route path="/contact" exact component={ContactPage}></Route>
        <Route path="/admin" exact component={AdminPage}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </>
  );
};

export default Page;
