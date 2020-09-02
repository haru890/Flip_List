import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const CheckBox=()=> {

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </>
  );
}

export default CheckBox;
