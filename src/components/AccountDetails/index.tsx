import React from "react";
import back from "../../assets/i/back.svg";
import manage from "../../assets/i/manage.svg";
import profile from "../../assets/i/profile.svg";
import toggleon from "../../assets/i/toggleon.svg";
import accountarrow from "../../assets/i/accountarrow.svg";
import accounttype from "../../assets/i/accounttype.svg";
import edit from "../../assets/i/edit.svg";
import dailyuseraccountlimit from "../../assets/i/dailyuseraccountlimit.svg";
import accountaccess from "../../assets/i/accountaccess.svg";
import accountdailylevel from "../../assets/i/accountdailylevel.svg";
import accountsettings from "../../assets/i/accountsettings.svg";
import accountpreview from "../../assets/images/accountpreview.svg";
import link from "../../assets/i/link.svg";
import "./styles.scss";

const AccountDetails: React.FC = () => {
  return (
    <div className="account-details">
      <div className="account__info">
        <div className="account__link">
          <img src={back} alt="" />
        </div>
        <div
          className="account__preview"
          style={{
            backgroundImage: `url(${accountpreview})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "cover",
          }}
        >
          <div className="account__preview--type">
            <p>Business FlexiBond</p>
            <img src={accounttype} alt="" />
          </div>
          <div className="account__preview--open-date">
            <p>active</p>
            <p>dec 2020</p>
          </div>
          <div className="account__preview--account-number">
            <div>
              <p>account number</p>
              <p>1064-4545-2131-01</p>
            </div>
            <div>
              <p>account level</p>
              <p>full access</p>
            </div>
          </div>
        </div>
        <div className="account__info--header">Account information</div>
        <div className="account__info--details">
          <div className="details__item">
            <p>Account number</p>
            <p>1094-4545-3129-01</p>
          </div>
          <div className="details__item">
            <p>Account Type</p>
            <p>Business FlexiBond</p>
          </div>
          <div className="details__item">
            <p>Account Access level</p>
            <p>Full access</p>
          </div>
          <div className="details__item">
            <p>Signatory rules</p>
            <p>signature group-A</p>
          </div>
          <div className="details__item">
            <p>Currency</p>
            <p>Pound</p>
          </div>
          <div className="details__item">
            <p>Daily limit of account</p>
            <p>10,000.00</p>
          </div>
          <div className="details__item">
            <p>Product type</p>
            <p>Savings account</p>
          </div>
          <div className="details__item">
            <p>Account status</p>
            <p>active</p>
          </div>
        </div>
      </div>
      <div className="account__details">
        <div className="account__details--item">
          <img src={manage} alt="" />
          <p>Account Maintenance</p>
        </div>
        <hr />
        <div className="account__details--item">
          <div>
            <img src={accountaccess} alt="" />
            <div>
              <p>Account access level</p>
              <span className="status">Full access</span>
            </div>
          </div>
          <div>
            <img src={accountsettings} alt="" />
            <img src={toggleon} alt="" />
          </div>
        </div>
        <div className="account__details--item">
          <div>
            <img src={accountdailylevel} alt="" />
            <div>
              <p>Daily account level limit</p>
              <span className="status">10,000.00</span>
            </div>
          </div>
          <div>
            <img src={accountsettings} alt="" />
            <img src={toggleon} alt="" />
          </div>
        </div>
        <div className="account__details--item">
          <div>
            <img src={dailyuseraccountlimit} alt="" />
            <div>
              <p>Daily user account level limit</p>
              <span className="status">10,000.00</span>
            </div>
          </div>
          <div>
            <img src={accountsettings} alt="" />
            <img src={toggleon} alt="" />
          </div>
        </div>

        <div className="account__details--item">
          <div>
            <img src={link} alt="" />
            <p>Customers linked to the account</p>
          </div>
        </div>
        <hr />
        <table>
          <tr>
            <td>
              <img src={profile} alt="" />
              <p>Alvin Butler </p>
              <img src={accountarrow} alt="" />
            </td>
            <td>
              <p>cif number</p>
              <p>11002345822210</p>
            </td>
            <td>
              <p>access level</p>
              <p>Full access</p>
            </td>
            <td>
              <p>daily transaction limit</p>
              <p>5000.00</p>
            </td>
            <td>
              <img src={edit} alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={profile} alt="" />
              <p>Alvin Butler </p>
              <img src={accountarrow} alt="" />
            </td>
            <td>
              <p>cif number</p>
              <p>11002345822210</p>
            </td>
            <td>
              <p>access level</p>
              <p>Full access</p>
            </td>
            <td>
              <p>daily transaction limit</p>
              <p>5000.00</p>
            </td>
            <td>
              <img src={edit} alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={profile} alt="" />
              <p>Alvin Butler </p>
              <img src={accountarrow} alt="" />
            </td>
            <td>
              <p>cif number</p>
              <p>11002345822210</p>
            </td>
            <td>
              <p>access level</p>
              <p>Full access</p>
            </td>
            <td>
              <p>daily transaction limit</p>
              <p>5000.00</p>
            </td>
            <td>
              <img src={edit} alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={profile} alt="" />
              <p>Alvin Butler </p>
              <img src={accountarrow} alt="" />
            </td>
            <td>
              <p>cif number</p>
              <p>11002345822210</p>
            </td>
            <td>
              <p>access level</p>
              <p>Full access</p>
            </td>
            <td>
              <p>daily transaction limit</p>
              <p>5000.00</p>
            </td>
            <td>
              <img src={edit} alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={profile} alt="" />
              <p>Alvin Butler </p>
              <img src={accountarrow} alt="" />
            </td>
            <td>
              <p>cif number</p>
              <p>11002345822210</p>
            </td>
            <td>
              <p>access level</p>
              <p>Full access</p>
            </td>
            <td>
              <p>daily transaction limit</p>
              <p>5000.00</p>
            </td>
            <td>
              <img src={edit} alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AccountDetails;
