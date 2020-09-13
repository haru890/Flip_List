import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(2),
    },
    absolute: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
  })
);

export default function DeleteButtonIcon() {
  const classes = useStyles();

  return (
    <Tooltip title="Delete">
      <IconButton size="small" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}
