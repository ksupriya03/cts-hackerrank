import React from "react";
import { PropTypes } from "prop-types";

import { INVALID_MESSAGE, VALID_MESSAGE } from "../utils/constants";

const Message = ({ isValid }) => {
  return (
    <div>
      <h3 className="text-center message">
        {isValid ? VALID_MESSAGE : INVALID_MESSAGE}
      </h3>
    </div>
  );
};

Message.propTypes = {
  isValid: PropTypes.bool.isRequired,
};

export default Message;
