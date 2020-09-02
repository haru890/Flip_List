import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const CheckBox=()=> {

  return (
    <>
      <Checkbox
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </>
  );
}

export default CheckBox;
