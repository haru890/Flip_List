import React from 'react';
import {AppBar,Toolbar, Typography} from '@material-ui/core';

const TitleBar=()=> {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Flip Lists
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

export default TitleBar;