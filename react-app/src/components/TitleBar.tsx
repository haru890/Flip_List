import React from 'react';
import {AppBar,Toolbar,IconButton,Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';



const TitleBar=()=> {
  return (
    // static	：	基準値の設定を行わない(デフォルトの左上を基準値とする)
    //  fixed	：	絶対位置指定。ウィンドウに対して絶対位置を決め、スクロールを行っても位置は固定されたままとなる(ウィンドウの左上が基準値となります) 
    // absolute	：	絶対位置指定。親のボックス要素に対して絶対位置を決めます(親のボックス要素の左上が基準値となります) ※親ウィンドウにstaticが設定されている場合は、親のボックス要素に対しての絶対位置指定は行いません(親のボックス要素のさらに親が基準値となります) 
    // relative	：	相対位置指定。親のボックス要素にstaticが設定されている場合、親のボックス要素の左上が基準値となります。
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

export default TitleBar;