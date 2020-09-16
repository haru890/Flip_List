import { Fab } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(0),
    },
  })
);

export default function DeleteButtonIcon() {
  const classes = useStyles();

  return (
    <Tooltip title="Delete">
      <IconButton aria-label="delete">
        <Fab color="primary" size="small" className={classes.fab}>
          <DeleteOutlineOutlinedIcon />
        </Fab>
      </IconButton>
    </Tooltip>
  );
}
