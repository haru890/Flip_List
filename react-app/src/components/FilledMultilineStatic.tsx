import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(0),
        width: "25ch",
      },
    },
  })
);

export default function FilledMultilineStatic() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="filled-multiline-static"
        rows={4}
        defaultValue="Default Value"
        variant="filled"
      />
    </form>
  );
}
