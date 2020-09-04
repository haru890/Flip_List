import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from '@emotion/styled';
import TitleBar from './components/ScrollableTabs';
import EditCard from './components/EditCard';
import Flips from './components/Flips';
import ScrollableTabs from './components/ScrollableTabs';

function App() {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <ScrollableTabs/>
      </Grid>
      <Main item xs={12} md={7}>
        <Flips/>
      </Main>
      <Aside item xs={12} md={5}>
        <EditCard/>
      </Aside>
    </Grid>
  );
}

const Main = styled(Grid)({
  backgroundColor: "#F0F8FF	",
});

const Aside = styled(Grid)({
  backgroundColor: "#F0F8FF",
});

export default App;