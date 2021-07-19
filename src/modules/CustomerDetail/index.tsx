import React from "react";
import CustomerDetails from "../../components/CustomerDetails";
import Navigation from "../../components/Navigation/Main";
import Layout from "../LayoutP";
import SecondaryLayout from "../LayoutS";
import "./styles.scss";

const CustomerDetail: React.FC = () => {
  return (
    <>
      <Navigation />
      <Layout>
        <SecondaryLayout>
          <CustomerDetails />
        </SecondaryLayout>
      </Layout>
    </>
  );
};

export default CustomerDetail;
