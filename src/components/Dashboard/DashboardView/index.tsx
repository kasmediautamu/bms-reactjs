import React from "react";
import { useHistory } from "react-router";

const DashboardView = () =>{
    let history = useHistory()
    const goToCustomerDetailsPage =()=>{
        history.push('/dashboard/customer-detail')
    }
    const goToAccountsDetailsPage =()=>{
        history.push('/dashboard/account-detail')
    }

    return (
        <div>
        <button style={{ marginRight: 50 }} onClick={goToCustomerDetailsPage}>
          Customertails
        </button>
        <button onClick={goToAccountsDetailsPage}>Account details</button>
        </div>
    )
}
export default DashboardView
