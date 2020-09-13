import {
  AppBar,
  Box,
  Card,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { ChangeEvent, FC, ReactNode, useEffect, useState } from "react";
import { fetchTabs } from "../api/tab";
import { Tab as _Tab } from "../models/tab";

interface Props {
  children?: ReactNode;
  index: number;
  value: number;
}

const TabPanel: FC<Props> = ({ children, index, value }) => {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const ScrollableTabs = () => {
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
    data.then((tabs) => {
      setTabs(tabs);
    });
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
          aria-label="scrollable auto tabs example"
          style={{
            margin: "10px",
            fontSize: "large",
          }}
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
          <Tab label="契約更新" />
        </Tabs>
      </AppBar>
    </div>
  );
};

const Root = styled(Card)({
  // backgroundColor: "#e1f5fe",
});

export default ScrollableTabs;
