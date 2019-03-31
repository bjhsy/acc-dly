import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import CompanyList from "./views/company/List";
import NewCompany from "./views/company/New";

export default function() {
  return (
    <Router>
      <Switch>
        <Redirect path="/" exact to={{ pathname: "/company/list" }} />
        <Route path="/company/list" component={CompanyList} />
        <Route path="/company/new" component={NewCompany} />
      </Switch>
    </Router>
  );
}
