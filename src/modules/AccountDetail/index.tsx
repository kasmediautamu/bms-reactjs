import React from "react";
import AccountDetails from "../../components/AccountDetails";
import Navigation from "../../components/Navigation/Main";
import Layout from "../LayoutP";
import SecondaryLayout from "../LayoutS";
import "./styles.scss";

const AccountDetail: React.FC = () => {
  return (
    <div className="search-page">
      <Navigation />
      <Layout>
        <SecondaryLayout>
          <AccountDetails />
        </SecondaryLayout>
      </Layout>
    </div>
  );
};

export default AccountDetail;
