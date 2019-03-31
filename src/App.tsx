import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CompanyList from "./views/company/List";
import NewCompany from "./views/company/New";

export default function() {
  return (
    <Router>
      <Route path="/company/list" component={CompanyList} />
      <Route path="/company/new" component={NewCompany} />
    </Router>
  );
}
