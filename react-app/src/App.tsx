import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from '@emotion/styled';
import TitleBar from './components/TitleBar';
import ScrollableTabs from './components/ScrollableTabs';
import EditCard from './components/EditCard';

function App() {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <TitleBar/>
      </Grid>
      <Main item xs={12} md={7}>
        <ScrollableTabs/>
      </Main>
      <Aside item xs={12} md={5}>
        <EditCard/>
      </Aside>
    </Grid>
  );
}

const Main = styled(Grid)({
  backgroundColor: "#defabc",
});

const Aside = styled(Grid)({
  backgroundColor: "#fedcba",
});

export default App;