import React, { ReactNode, FC, useState, ChangeEvent, useEffect } from 'react';
import {Card, AppBar, Tabs, Typography, Box, styled, Button} from '@material-ui/core';
import { Tab as _Tab } from '../models/tab';
import { fetchTabs } from '../api/tab';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import DeleteAlertDialog from './DeleteAlertDialog';
import CheckBox from './CheckBox';
import TextChangeButton from './TextChangeButton';

interface Props {
  children?: ReactNode;
  index: number;
  value: number;
}

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

const Flips=()=> {

  const [tabs, setTabs] = useState<_Tab[] | undefined>(undefined);

  const fetchTabsReq = async () => {
    try {
      const { data } = await fetchTabs();
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const data = fetchTabsReq();
    data.then(tabs => { setTabs(tabs); });
  }, []);

  const [value, setValue] = useState<number>(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" color="default">
        {/* <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs ? tabs.map((tab) => (
              <Tab label={tab.tag}/>
            )):null
          }
        </Tabs> */}
        {/* <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="8/27 木" />
          <Tab label="8/28 金" />
          <Tab label="メモ" />
          <Tab label="勉強" />
          <Tab label="就活" />
          <Tab label="仕事" />
          <Tab label="日記" />
          <Tab label="健康" />
          <Tab label="家計簿" />
        </Tabs> */}
      </AppBar>
      {/* <TabList/>
      <TabPanel value={value} index={0}>
        <FlipList/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FlipList/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FlipList/>
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
      </TabPanel> */}
    <Root>
      <Button variant="outlined" color="primary" style={{width:"93%", padding:"15px", margin: "30px 0px 0px 20px"}}>
        <CheckBox />フリップ1<DeleteAlertDialog />
      </Button>
      <Button variant="outlined" color="primary" style={{width:"93%", padding:"15px", margin: "30px 0px 0px 20px"}}>
        <CheckBox />フリップ2<DeleteAlertDialog />
      </Button>
      <Button variant="outlined" color="primary" style={{width:"93%", padding:"15px", margin: "30px 0px 0px 20px"}}>
        <CheckBox />フリップ3<DeleteAlertDialog />
      </Button>
      <Button variant="outlined" color="primary" style={{width:"93%", padding:"15px", margin: "30px 0px 0px 20px"}}>
        <CheckBox />フリップ4<DeleteAlertDialog />
      </Button>
      <TextChangeButton variant="outlined" color="primary" style={{width:"93%", padding:"15px", margin: "30px 0px 30px 20px"}}>
        <CheckBox />フリップ5<DeleteAlertDialog />
      </TextChangeButton>
    </Root>
    
    </>
  );
}

const Root = styled(Card)({
  // backgroundColor: "#e1f5fe",
});

// const Border = styled(Card)({
//   borderCollapse: "collapse",
//   border: "1px solid #cfd8dc",
//   padding:"10px"
// });

export default Flips;