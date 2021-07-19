import React from "react";


type Props = {
  htmlFor: string;
  children: string;
  labelClass$: string;
};
function Label(props: Props) {
  const { htmlFor, children, labelClass$ } = props;
  return (
    <label className={`${labelClass$}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
export default Label;
