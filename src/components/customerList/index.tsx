import React from "react";
import  customer from '../../assets/i/customer.svg';
import profile from '../../assets/i/profile.svg'
import './styles.scss';

const CustomerList = () => {
  return (
    <div className="customer-list">
      <div className="customer-list__header">
        <img src={customer} alt="customer" />
        <div>
          <p>Customer list</p>
          <p>
            Showing records:<span>1-6</span> of total <span>1,586</span> entries
          </p>
        </div>
      </div>
      <hr />
      <div className="customer-list__body">
        <div className="customer">
          <div className="customer-name">
            <img src={profile} alt="" />
            <p>Jim Smithson</p>
          </div>
          <div className="customer-detail">
            <p className="account-label">Account Number</p>
            <p className="number">1094-4545-3129</p>
          </div>
          <div className="customer-detail">
            <p className="account-label">Cif Number</p>
            <p className="number">1094-4545-3129</p>
          </div>
          <div className="customer-detail">
            <p className="account-label">Business Entity</p>
            <p className="number">Acme Coops</p>
          </div>
          <div className="customer-detail">
            <p className="account-label">Phone Number</p>
            <p className="number">+44 xxx xxx</p>
          </div>
          <div className="customer-detail">
            <p className="account-label">Address</p>
            <p className="number">xxx xxx xxx</p>
          </div>
          <div className="customer-detail">
            <p className="account-label">Postcode</p>
            <p className="number">P016 7GZ</p>
          </div>
          <div className="customer-detail">
            <p className="account-label">Address</p>
            <p className="number">ivan@gmil.com</p>
          </div>
          <div className="customer-profile">
              view profile
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
