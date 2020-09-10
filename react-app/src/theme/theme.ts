import { blue } from "@material-ui/core/colors";
import green from "@material-ui/core/colors/green";
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: {
      main: green[500],
    },
  },
});
