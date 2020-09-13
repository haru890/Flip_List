import Checkbox from "@material-ui/core/Checkbox";
import React from "react";

const SecondaryCheckBox = () => {
  return (
    <>
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </>
  );
};

export default SecondaryCheckBox;
