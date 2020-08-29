import React from 'react';
import {AppBar, Toolbar, styled, Typography} from '@material-ui/core';

const TitleBar=()=> {
  return (
    // <Root>
     <AppBar position="static">
        <Toolbar>
          <Typography variant='h6' align='center'>
            Life Flip
          </Typography>
        </Toolbar>
      </AppBar>
    // </Root>

  );
}

const Root = styled(AppBar)({
  margin: "10px"
});

export default TitleBar;