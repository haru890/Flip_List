import React, { useState, useEffect } from 'react';
import { Card, Divider, Typography } from '@material-ui/core';
import { fetchTabs } from '../api/tab';
import { Tab } from '../models/tab';

const TabList = () => {
  const [tabs, setTabs] = useState<Tab[] | undefined>(undefined);

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

  return (
    <Card>
      {/* <Typography variant="h6">Tag一覧</Typography> */}
      <Divider />
      {/* ? 三項演算子 */}
      {tabs ? tabs.map((tab) => (
        // <Typography variant="h6">{tag}</Typography>
        <Typography variant="h6">{tab.id}{tab.tag}</Typography>
      )):null}
    </Card>
  );
};

export default TabList;