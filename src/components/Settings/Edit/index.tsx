import React, { useState } from "react";
import Dropdown from "../../BaseForm/DropdownSelect";
import InputField from "../../BaseForm/Input";
import Label from "../../BaseForm/Label";
import "./styles.scss";

const Edit = () => {
  const options = ["Faster payments", "SEPA", "CHAPS", "SWIFT"];
  const initialEditFormState = {
    enabled: false,
  };
  const transaction_type = ["Faster payments", "SEPA", "CHAPS", "SWIFT"];
  const [formData, setFormData] = useState(initialEditFormState);
  const { enabled } = formData;
  const onChange = () => {
    return console.log("entered");
  };
  return (
    <form>
      <div className="segement__title">transaction type*</div>
      <div className="form-fields">
        <fieldset>
          <InputField
            type="radio"
            value="Faster Payments"
            name="transactionType"
          />
          <Label htmlFor="faster payments" labelClass$="radio-label">
            Faster payments
          </Label>
        </fieldset>
        <fieldset>
          <InputField type="radio" value="SEPA" name="transactionType" />
          <Label htmlFor="sepa" labelClass$="radio-label">
            SEPA
          </Label>
        </fieldset>
        <fieldset>
          <InputField type="radio" value="CHAPS" name="transactionType" />
          <Label htmlFor="chaps" labelClass$="radio-label">
            CHAPS
          </Label>
        </fieldset>
        <fieldset>
          <InputField type="radio" value="SWIFT" name="transactionType" />
          <Label htmlFor="swift" labelClass$="radio-label">
            SWIFT
          </Label>
        </fieldset>
      </div>
      <div className="segment__title">customer segment*</div>
      <div className="form-fields">
        <div className="setting__type">
          <div className="setting__type--value">
            <InputField type="checkbox" />
            <Label htmlFor="personal" labelClass$="checkbox-label">
              Personal
            </Label>
          </div>
          <fieldset>
            <Label htmlFor="currency" labelClass$="edit-label">
              Currency
            </Label>
            <Dropdown dataList={options} />
          </fieldset>
          <fieldset>
            <Label htmlFor="limits" labelClass$="search-form-label">
              Limits*
            </Label>
            <InputField
              type="text"
              name="businessLimit"
              className="edit-form-field"
              placeholder="Enter Amount"
              onChange={onChange}
            />
          </fieldset>
        </div>
      </div>
      <div className="form-fields">
        <div className="setting__type">
          <div className="setting__type--value">
            <InputField type="checkbox" />
            <Label htmlFor="personal" labelClass$="checkbox-label">
              Business
            </Label>
          </div>
          <fieldset>
            <Label htmlFor="currency" labelClass$="edit-label">
              Currency
            </Label>
            <Dropdown dataList={options} />
          </fieldset>
          <fieldset>
            <Label htmlFor="limits" labelClass$="edit-form-label">
              Limits*
            </Label>
            <InputField
              type="text"
              name="businessLimit"
              className="edit-form-field"
              placeholder="Enter Amount"
              onChange={onChange}
            />
          </fieldset>
        </div>
      </div>
      <div className="segment__title">
          channel*
      </div>
      <div className="form-fields">
        <fieldset>
          <InputField type="checkbox"></InputField>
          <Label htmlFor="online banking" labelClass$="edit-form-label">
            Online Banking
          </Label>
        </fieldset>
        <fieldset>
          <InputField type="checkbox"></InputField>
          <Label htmlFor="mobile app" labelClass$="edit-form-label">
            Mobile App
          </Label>
        </fieldset>
      </div>
    </form>
  );
};
export default Edit;
