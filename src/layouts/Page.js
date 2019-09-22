import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage.js";
import ProductPage from "../pages/ProductsPage";
import ProductPageList from "../pages/ProductPageList.js";
import ContactPage from "../pages/ContactPage.js";
import AdminPage from "../pages/AdminPage.js";
import LoginPage from "../pages/LoginPage.js";
import ErrorPage from "../pages/ErrorPage.js";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/products" exact component={ProductPageList}></Route>
        <Route path="/product/:id" exact component={ProductPage}></Route>
        <Route path="/contact" exact component={ContactPage}></Route>
        <Route path="/admin" exact component={AdminPage}></Route>
        <Route path="/login" exact component={LoginPage}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </>
  );
};

export default Page;
