import React, { ReactNode, FC, useState, ChangeEvent, useEffect } from 'react';
import {Card, AppBar, Tabs, Typography, Box, styled, Button} from '@material-ui/core';
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



  let borderColor = '#9FA8DC';

  const borderColorChange = () => {
    borderColor = '#FF0000';
  };



  return (
    <>
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



      <Button onClick={borderColorChange} variant="outlined" color="primary" style={{width:"93%", padding:"15px", margin: "30px 0px 0px 20px", borderColor: borderColor,}}>
        <CheckBox />フリップ4<DeleteAlertDialog />
      </Button>

      <Select>
        <Button variant="outlined" color="primary" style={{width:"93%", padding:"15px", margin: "30px 0px 30px 20px",}}>
          <CheckBox />フリップ5<DeleteAlertDialog />
        </Button>
      </Select>



    </Root>
    </>
  );
}

const Root = styled(Card)({
  backgroundColor: 'white',
});



const Select = styled(Button)({
  '&:active': {
    borderColor: '#FF0000',
  },
});



export default Flips;