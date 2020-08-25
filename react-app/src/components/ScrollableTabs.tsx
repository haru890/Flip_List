import React, { ReactNode, FC, useState, ChangeEvent, useEffect } from 'react';
import {Card, AppBar, Tabs, Typography, Box, Tab, CardContent} from '@material-ui/core';
import FlipList from './FlipList';
import TabList from './TabList';
import { Tab as _Tab } from '../models/tab';
import { fetchTabs } from '../api/tab';
import CreateIcon from '@material-ui/icons/Create';

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

const ScrollableTabs=()=> {

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
          {tabs ? tabs.map((tab) => (
              <Tab label={tab.tag}/>
            )):null
          }
        </Tabs>
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
        <Card>
          <CardContent>フリップ1<CreateIcon></CreateIcon></CardContent>
        </Card>
        <Card>
          <CardContent>フリップ2<CreateIcon></CreateIcon></CardContent>
        </Card>
        <Card>
          <CardContent>フリップ3<CreateIcon></CreateIcon></CardContent>
        </Card>
        <Card>
          <CardContent>フリップ4<CreateIcon></CreateIcon></CardContent>
        </Card>
        <Card>
          <CardContent>フリップ5<CreateIcon></CreateIcon></CardContent>
        </Card>
        <Card>
          <CardContent>フリップ6<CreateIcon></CreateIcon></CardContent>
        </Card>
    </div>
  );
}

export default ScrollableTabs;