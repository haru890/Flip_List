// React は React ライブラリのエントリポイントです。<script> タグから React を読み込む場合、これらの最上位 API をグローバルの React から利用できます。npm と ES6 を使う場合、import React from 'react' と書けます。
import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from '@emotion/styled';
import TitleBar from './components/TitleBar';
import ScrollableTabs from './components/ScrollableTabs';

function App() {
  return (
    <Grid container>
      {/* Header　コンポーネントの呼び出し？　item..は値を渡している？ */}
      <Header item xs={12} md={12}>
        <TitleBar/>
      </Header>
      <Main item xs={12} md={8}>
        <ScrollableTabs/>
      </Main>
      <Aside item xs={12} md={4}>Aside</Aside>
      <Footer item xs={12} md={12}>Footer</Footer>
    </Grid>
  );
}

// const ◯◯　←　定数？　コンポーネント？　名前は固定されている？（Header,Main,Asideなど）　
const Header = styled(Grid)({
  backgroundColor: "#abcdef",
});

const Main = styled(Grid)({
  backgroundColor: "#defabc",
});

const Aside = styled(Grid)({
  backgroundColor: "#fedcba",
});

const Footer = styled(Grid)({
  backgroundColor: "#cbafed",
});

export default App;