import Button from "../../BaseForm/Button";
type Props ={
    ButtonLabel:string
    onclick?:any
}
function SettingsButton(props:Props) {
    const {ButtonLabel,onclick} =props
    return (
      <Button btnClass="settings-button" primary="button" onClick={onclick}>
        {ButtonLabel}
      </Button>
    );
  }

  export default SettingsButton