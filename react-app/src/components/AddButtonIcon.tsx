import { IconButton } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(0),
    },
  })
);

export default function SimpleTooltips() {
  const classes = useStyles();

  return (
    <Tooltip title="Add" aria-label="add">
      <IconButton aria-label="add">
        <Fab size="small" color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </IconButton>
    </Tooltip>
  );
}
