import InputField from "../../../BaseForm/Input";
import Label from "../../../BaseForm/Label";
import "./styles.scss";

const CreateMessage = () => {
  return (
    <form action="">
      <fieldset>
        <Label htmlFor="header" labelClass$="message-field-label">
          header*
        </Label>
        <InputField type="text" placeholder="Enter header title" />
      </fieldset>
      <fieldset>
        <Label htmlFor="header" labelClass$="message-field-label">
          body*
        </Label>
        <InputField type="text-area" placeholder="Enter body description" />
      </fieldset>
      <div>
        <fieldset>
          <Label htmlFor="start date" labelClass$="message-field-label">
            Date from :*
          </Label>
          <InputField type="date" placeholder="Select date" />
        </fieldset>
        <fieldset>
          <Label htmlFor="end date" labelClass$="message-field-label">
            Date to :*
          </Label>
          <InputField type="date" placeholder="Select date" />
        </fieldset>
        <fieldset>
          <Label htmlFor="start time" labelClass$="message-field-label">
            Time from :*
          </Label>
          <InputField type="time" placeholder="Select time" />
        </fieldset>
        <fieldset>
          <Label htmlFor="end time" labelClass$="message-field-label">
            Time to :*
          </Label>
          <InputField type="time" placeholder="Select time" />
        </fieldset>
      </div>
      <div>
        <Label htmlFor="customer segment" labelClass$="message-field-label">
          Customer segment:*
        </Label>
        <fieldset>
        <InputField type="radio" />
          <Label htmlFor="personal" labelClass$="message-field-label">
            Personal
          </Label>
          
        </fieldset>
        <fieldset>
        <InputField type="radio" />
          <Label htmlFor="Business" labelClass$="message-field-label">
            Business
          </Label>
          
        </fieldset>
      </div>
    </form>
  );
};

export default CreateMessage;
