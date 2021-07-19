import React, { FormEvent, useState } from "react";
import Label from "../BaseForm/Label";
import InputField from "../BaseForm/Input";
import Button from "../BaseForm/Button";
import Authentication from "../au"
import { History,LocationState} from "history"

import "./styles.scss";
import logo from "../../assets/i/logo.svg";
import ValidationMessage from "../BaseForm/Error";
import { Redirect, useHistory, useLocation } from "react-router";

const LoginForm: React.FC = (props:any) => {
  const initialFormState = {
    enabled: false,
    userID: "",
  };

  let history = useHistory()
  let location = useLocation()

  
  const [formData, setFormData] = useState(initialFormState);
  const [formError, setFormError] = useState<any | null>(null);
  const [inputError,setInputError] = useState<string>('validInput')
  const { userID, enabled } = formData;

  const onChange = (e: FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value});
    
    console.log(formData);
  };
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setFormError(null);
    setFormData({
      ...formData,
      enabled: true,
      
    });
    let error = validateForm()
    if (error) {
        setFormError(error)
        console.log(error)
        setFormData({
            ...formData,
            enabled:false
        })
        setInputError('invalidInput')
        return
    } else {
        setFormData({
            ...formData,
            enabled:true
        })
        // Authentication.login(()=>{
        //   return <Redirect to='/dashboard' />
        //  })
    }
    console.log('submitted')
    
    Authentication.login(()=>{
      history.push("/dashboard")
     
    })
  };
  const validateForm = () => {
    let error = null;
    if (userID === "") {
      error = {
        field_id: "userID",
        message: "Your UserID is required",
      };
      return error;
    } else if(userID !=='passed') {
        error = {
            field_id: "userID",
            message: "The User ID provided is not registered to your environment. Please contact your administration",
          };
    }
    
    return error;
  };
 
    function SubmitButton(){
      if(userID !=='' && userID.length >=4){
        return <Button
        btnClass="active"
        primary="submit"
      >
        Continue
      </Button>
      }
      else {
        return <Button
        btnClass="user-id_btn"
        disabled
        primary="submit"
      >
        Continue
      </Button>
      }
    }
  return (
    <div className="Login">
      <img src={logo} alt="brand-logo" />
      <form onSubmit={onSubmit} className="login-form">
        <p className="login-form_heading">
          Sign in <span>Bank OPS</span> with single sign on
        </p>
        <fieldset className="user-id_fieldset">
          <Label htmlFor="user id" labelClass$="user-id_label">
            User ID
          </Label>
          <InputField
            type="text"
            name="userID"
            onChange={onChange}
            placeholder="Enter your user ID"
            className={`form-field ${inputError}`}
          ></InputField>
          {formError && formError.field_id === "userID" ? (
              <ValidationMessage class$="validation-error">{formError.message}</ValidationMessage>
          ):("")}
        </fieldset>
        <fieldset className="user-id_btns">
          <p className="user-id_forgot">Forgot user ID</p>
          <SubmitButton/>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginForm;
