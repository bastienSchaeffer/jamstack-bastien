import React from "react";

import Phone from "./Phone";
import Message from "./Message";
import Envelope from "./Envelope";
import Logo from "./Logo";

const Icon = props => {
  switch (props.name) {
    case "phone":
      return <Phone {...props} />;
    case "message":
      return <Message {...props} />;
    case "envelope":
      return <Envelope {...props} />;
    case "logo":
      return <Logo {...props} />;
    default:
      return <span>no icon</span>;
  }
};

export default Icon;
