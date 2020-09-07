import React, { ReactNode, FC, useState, ChangeEvent, useEffect } from 'react';
import {Card, Typography, Box, styled, Button} from '@material-ui/core';
import { Tab as _Tab } from '../models/tab';
import { fetchTabs } from '../api/tab';
import DeleteAlertDialog from './DeleteAlertDialog';
import CheckBox from './CheckBox';

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

  const [selected, setSelected] = useState<boolean>(false);


  return (
    <>
    <Root>
      <Button variant="outlined" color="primary" 
        onClick={() => { setSelected(!selected) }}
        style={{width:"93%", padding:"15px", margin: "30px 0px 0px 20px", border: `${selected ? "solid 2px" : "solid 1px"}`, borderColor: `${selected ? "#FE8C56" : "#9FA8DC"}`,}}>
        <CheckBox />フリップ1<DeleteAlertDialog />
      </Button>
      <Button variant="outlined" color="primary" 
        onClick={() => { setSelected(!selected) }}
        style={{width:"93%", padding:"15px", margin: "30px 0px 0px 20px", border: `${selected ? "solid 2px" : "solid 1px"}`, borderColor: `${selected ? "#FE8C56" : "#9FA8DC"}`,}}>
        <CheckBox />フリップ2<DeleteAlertDialog />
      </Button>
      <Button variant="outlined" color="primary" 
        onClick={() => { setSelected(!selected) }}
        style={{width:"93%", padding:"15px", margin: "30px 0px 30px 20px", border: `${selected ? "solid 2px" : "solid 1px"}`, borderColor: `${selected ? "#FE8C56" : "#9FA8DC"}`,}}>
        <CheckBox />フリップ3<DeleteAlertDialog />
      </Button>
    </Root>
    </>
  );
}

const Root = styled(Card)({
  backgroundColor: 'white',
});

// const Select = styled(Button)({
//   '&:active': {
//     border: "solid 2px",
//     borderColor: '#FF0000',
//   },
// });

export default Flips;