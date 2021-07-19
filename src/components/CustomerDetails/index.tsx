import React from "react";
import back from "../../assets/i/back.svg";
import options from "../../assets/i/options.svg";
import phone from "../../assets/i/phone.svg";
import circlecheck from "../../assets/i/circlecheck.svg";
import eye from "../../assets/i/eye.svg";
import call from "../../assets/i/call.svg";
import birth from "../../assets/i/birth.svg";
import address from "../../assets/i/address.svg";
import userid from "../../assets/i/user.svg";
import email from "../../assets/i/email.svg";
import manage from "../../assets/i/manage.svg";
import list from "../../assets/i/list.svg";
import toggleon from "../../assets/i/toggleon.svg";
import key from "../../assets/i/key.svg";
import accountarrow from "../../assets/i/accountarrow.svg";
import "./styles.scss";
const CustomerDetails: React.FC = () => {
  return (
    <div className="customer-details">
      <div className="profile">
        <div className="profile__link">
          <img src={back} alt="" />
          <p>Back</p>
        </div>
        <div className="customer-name">
          <div>
            <p>Kathryn Jones</p>
            <span>1 Mobile devices linked</span>
          </div>
          <img src={options} alt="" />
        </div>
        <div className="detail__item">
          <img src={phone} alt="phone" />
          <div>
            <p>Kathryn Jones Iphone</p>
            <span>Iphone 12 Pro Max</span>
          </div>
          <p className="status">Linked</p>
        </div>
        <div className="detail__item">
          <img src={circlecheck} alt="" />
          <p>Status OLB access</p>
          <p className="status">Enable</p>
        </div>
        <div className="detail__item">
          <img src={circlecheck} alt="" />
          <p>Register for OLB</p>
          <p className="status">Yes</p>
        </div>
        <hr />
        <div className="details__title">
          <p>Customer details</p>
          <img src={eye} alt="" />
        </div>
        <div className="detail">
          <img src={call} alt="" />
          <div>
            <p>Phone number</p>
            <span>+44 xxx xxx</span>
          </div>
        </div>
        <div className="detail">
          <img src={birth} alt="" />
          <div>
            <p>Date of birth</p>
            <span>+44 xxx xxx</span>
          </div>
        </div>
        <div className="detail">
          <img src={address} alt="" />
          <div>
            <p>Address</p>
            <span>+44 xxx xxx</span>
          </div>
        </div>
        <div className="detail">
          <img src={userid} alt="" />
          <div>
            <p>user id</p>
            <span>+44 xxx xxx</span>
          </div>
        </div>
        <div className="detail">
          <img src={email} alt="" />
          <div>
            <p>Email id</p>
            <span>ivan@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="access__item">
          <img  src={manage} alt="" />
          <p>Manage Customer Access</p>
        </div>
        <hr />
        <div className="access__item access__item--stretched">
          <div>
            <img src={key} alt="" />
            <div>
              <p>Status of customer's OLB access</p>
              <span className="status">Enable</span>
            </div>
          </div>
          <img src={toggleon} alt="" />
        </div>
        <div className="access__item access__item--stretched">
          <div>
            <img src={phone} alt="" />
            <div>
              <p>Mobile device linked</p>
              <span>Mobile app linked</span>
            </div>
          </div>
          <img src={toggleon} alt="" />
        </div>
        <div className="accounts__header">
          <div>
            <img src={list} alt="" />
            <p>account list</p>
          </div>
          <p>Account maintenance</p>
        </div>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Account number</th>
              <th>Product type</th>
              <th>Account access level</th>
              <th>Account status</th>
              <th>Account type</th>
              <th>Daily limit of the account</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>1094-4545-3120 </p>
                <img src={accountarrow} alt="" />
              </td>
              <td>Current</td>
              <td>Full access</td>
              <td>
                <p>active</p>
              </td>
              <td>Personal</td>
              <td>$5,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerDetails;
