import styled from "@emotion/styled";
import Grid from "@material-ui/core/Grid";
import React from "react";
import ActionsInAccordionSummary from "./components/ActionsInAccordionSummary";
import MultilineTextFields from "./components/MultilineTextFields";
import ScrollableTabs from "./components/ScrollableTabs";

function App() {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <ScrollableTabs />
      </Grid>
      <Main item xs={12} md={7}>
        <ActionsInAccordionSummary />
      </Main>
      <Aside item xs={12} md={5}>
        <MultilineTextFields />
      </Aside>
    </Grid>
  );
}

const Main = styled(Grid)({
  backgroundColor: "#F0F8FF",
});

const Aside = styled(Grid)({
  backgroundColor: "#F0F8FF",
});

export default App;
