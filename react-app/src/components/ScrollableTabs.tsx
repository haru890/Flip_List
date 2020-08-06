//　Reactの中に子要素（ReactNode, FC, useState, ChangeEvent）がある？
import React, { ReactNode, FC, useState, ChangeEvent } from 'react';
// 　上記のimport Reactとの書き方の違うのはなぜか？
import {AppBar,Tabs,Tab,Typography,Box} from '@material-ui/core';
import FlipList from './FlipList';

// メモ
// State: コンポーネントの状態を管理する　可変　
// Props: 子コンポーネントに値（文字列 ・ スタイル ・ イベントなど）を渡すことが可能　不変

//　interface の子要素としてPropsが存在する？ 
//　Props：所有物、資産　コンポーネント（部品、要素）利用時に属性として設定ができる値
interface Props {
// childrenというProps　
// ReactNodeは下記のいずれかになります。
// ReactElement、string (ReactText)、number (ReactText)、ReactNodeの配列 (ReactFragment)
// これらは他のReactElementの子要素を表すプロパティとして使用されます。 
// 引数（children?、index、value）と型の指定？　
  children?: ReactNode;
  index: number;
  value: number;
}

// FC：FunctionComponentの略
// ＜＞は何を意味する？
const TabPanel:FC<Props>=({children, index, value})=> {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ScrollableTabs=()=> {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {
            [...new Array(7)].map((v,i)=>(
              <Tab label={`Item ${i}`}/>
            ))
          }
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FlipList/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}

export default ScrollableTabs;