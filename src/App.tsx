import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import CompanyList from "./views/company/List";
import NewCompany from "./views/company/New";
import InspectionStrategy from "./views/inspection/Strategy";
import InspectionPlan from "./views/inspection/Plan";
import InspectionPlanResult from "./views/inspection/PlanResult";

export default function() {
  return (
    <Router>
      <Switch>
        <Redirect path="/" exact to={{ pathname: "/company/list" }} />
        <Route path="/company/list" component={CompanyList} />
        <Route path="/company/new" component={NewCompany} />
        <Route path="/inspection/strategy" component={InspectionStrategy} />
        <Route path="/inspection/plan" component={InspectionPlan} />
        <Route path="/inspection/planresult" component={InspectionPlanResult} />
      </Switch>
    </Router>
  );
}
