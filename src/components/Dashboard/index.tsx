import React from "react";
import { Route, Switch } from "react-router-dom";
import AccountDetail from "../../modules/AccountDetail";
import CustomerDetail from "../../modules/CustomerDetail";

const Dashboard =()=>{
return (
    <Switch>
        <Route exact path={"dashboard/home"} component ={AccountDetail}></Route>
        <Route exact path={"dashboard/customer-detail"} component ={CustomerDetail}></Route>
    </Switch>
)
}
export default Dashboard