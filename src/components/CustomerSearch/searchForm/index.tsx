import React, { FormEvent, useState } from "react";
import criteria from "../../../assets/i/searchcriteria.svg";
import formtoggle from "../../../assets/i/formtoggle.svg";
import placeholderIcon from "../../../assets/i/placeholder.svg";
import Button from "../../BaseForm/Button";
import Label from "../../BaseForm/Label";
import InputField from "../../BaseForm/Input";
import ReactTooltip from "react-tooltip";
import CustomerList from "../../customerList";
import "./styles.scss";

const SForm = () => {
  const initialSearchState = {
    enabled: false,
    accountNumber: "",
    cifNumber: "",
    firstName: "",
    surName: "",
    phoneNumber: "",
    companyName: "",
    address: "",
    postcode: "",
    emailID: "",
  };
  const [formData, setFormData] = useState(initialSearchState);
  const {
    enabled,
    accountNumber,
    cifNumber,
    firstName,
    surName,
    phoneNumber,
    companyName,
    address,
    postcode,
    emailID,
  } = formData;

  const onChange = (e: FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value });

    console.log(formData);
  };
  //form submit
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setFormData({
      ...formData,
      enabled: true,
    });
    console.log(formData);
  };
  function SubmitButton() {
    if (accountNumber !== "" && accountNumber.length >= 4) {
      return (
        <Button btnClass="active" primary="submit">
          Search
        </Button>
      );
    } else {
      return (
        <Button btnClass="user-id_btn" disabled primary="submit">
          Search
        </Button>
      );
    }
  }
  function ShowCustomerList() {
    if (accountNumber !== "" && accountNumber.length >= 4) {
      return <CustomerList />;
    } else {
      return (
        <div className="search-result">
          <div className="search-inactive">
            <img src={placeholderIcon} alt="search-results" />
            <p className="search-instruction">
              Value should be provided in at least 1 search criteria field to
              enable the search customers
            </p>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="search-customer">
      <div className="search-form">
        <form onSubmit={onSubmit}>
          <div className="title-bar">
            <div className="search-criteria">
              <p>Define your search criteria</p>
              <img
                src={criteria}
                alt="criteria"
                data-tip
                data-for="criteriaTip"
              />
              <ReactTooltip
                id="criteriaTip"
                place="right"
                effect="solid"
                backgroundColor="#fff"
                textColor="#003D4C"
                className="criteria-tool-tip"
              >
                <div className="tool-tip-content">
                  <p>Search rules</p>
                  <ol className="tool-tips__list">
                    <li>* + Minimum 2 letters</li>
                    <li>Minimun first 2 letters + *</li>
                    <li>* + Min 2 letters + *</li>
                  </ol>
                </div>
              </ReactTooltip>
            </div>

            <div className="form-toggle">
              <p>Show or hide search form</p>
              <img src={formtoggle} alt="toggle-form" />
            </div>
          </div>
          <div className="form-fields">
            <fieldset>
              <Label htmlFor="account number" labelClass$="search-form-label">
                Account number
              </Label>
              <InputField
                type="text"
                name="accountNumber"
                className="search-form-field"
                placeholder="Enter account number"
                onChange={onChange}
              />
            </fieldset>
            <fieldset>
              <Label htmlFor="CIF number" labelClass$="search-form-label">
                CIF number
              </Label>
              <InputField
                type="text"
                name="cifNumber"
                className="search-form-field"
                placeholder="Enter CIF number (numeric)"
                onChange={onChange}
              />
            </fieldset>
            <fieldset>
              <Label htmlFor="First name" labelClass$="search-form-label">
                First name
              </Label>
              <InputField
                type="text"
                name="firstName"
                className="search-form-field"
                placeholder="Enter first name"
                onChange={onChange}
              />
            </fieldset>
            <fieldset>
              <Label htmlFor="Sur name" labelClass$="search-form-label">
                Surname
              </Label>
              <InputField
                type="text"
                name="surName"
                className="search-form-field"
                placeholder="Enter surname"
                onChange={onChange}
              />
            </fieldset>
            <fieldset>
              <Label htmlFor="Phone number" labelClass$="search-form-label">
                Phone number
              </Label>
              <InputField
                type="text"
                name="phoneNumber"
                className="search-form-field"
                placeholder="Enter phone number"
                onChange={onChange}
              />
            </fieldset>
            <fieldset>
              <Label htmlFor="Company name" labelClass$="search-form-label">
                Company name (Business only)
              </Label>
              <InputField
                type="text"
                name="companyName"
                className="search-form-field"
                placeholder="Enter company name"
                onChange={onChange}
              />
            </fieldset>
            <fieldset>
              <Label htmlFor="Address" labelClass$="search-form-label">
                Address
              </Label>
              <InputField
                type="text"
                name="address"
                className="search-form-field"
                placeholder="Enter address"
                onChange={onChange}
              />
            </fieldset>
            <fieldset>
              <Label htmlFor="Postcode" labelClass$="search-form-label">
                Postcode
              </Label>
              <InputField
                type="text"
                name="postcode"
                className="search-form-field"
                placeholder="Enter postcode"
                onChange={onChange}
              />
            </fieldset>
            <fieldset>
              <Label htmlFor="Email ID" labelClass$="search-form-label">
                Email ID
              </Label>
              <InputField
                type="text"
                name="emailID"
                className="search-form-field"
                placeholder="Enter email ID"
                onChange={onChange}
              />
            </fieldset>
            <fieldset>
              <Button primary="button">Clear</Button>
              <SubmitButton />
            </fieldset>
          </div>
        </form>
      </div>
      <ShowCustomerList />
      <div></div>
    </div>
  );
};

export default SForm;
