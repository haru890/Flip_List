import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
// import { Alert, AlertTitle } from '@material-ui/lab';

const TitleBar=()=> {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant='h6' align='center'>
            Life Flips
          </Typography>
          {/* <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — <strong>check it out!</strong>
          </Alert>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
          </Alert> */}
        </Toolbar>
      </AppBar>
  );
}

export default TitleBar;