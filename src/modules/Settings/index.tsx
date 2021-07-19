import React from "react";
import Navigation from "../../components/Navigation/Main";
import Settings from "../../components/Settings";
import SettingsNav from "../../components/Settings/Navigation";
import Layout from "../LayoutP";
import SecondaryLayout from "../LayoutS";
import "./styles.scss";
// type Props ={
//   children:any
// }
const Setting: React.FC = ({children}) => {
  return (
    <>
      <Navigation />
      <Layout>
        <SecondaryLayout>
          <SettingsNav />
          {children}
        </SecondaryLayout>
      </Layout>
    </>
  );
};

export default Setting;
