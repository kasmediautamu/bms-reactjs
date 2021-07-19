import React from "react";
import "./styles.scss";
import placeholderIcon from "../../../assets/i/placeholder.svg";
type Props = {
  children: any;
  reminder: string;
};
const EmptySettings = (props: Props) => {
  const { children, reminder } = props;
  return (
    <div className="empty-settings">
      <img src={placeholderIcon} alt="" />
      <p>{reminder}</p>
      {children}
    </div>
  );
};

export default EmptySettings;
