import React, { ReactNode, FC, useState, ChangeEvent, useEffect } from 'react';
import {Card, Typography, Box, styled, Button, TextField, FormControl} from '@material-ui/core';
import { Tab as _Tab } from '../models/tab';
import { fetchTabs } from '../api/tab';
import DeleteAlertDialog from './DeleteAlertDialog';
import CheckBox from './CheckBox';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

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



  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20,
    },
    details: {
      alignItems: 'center',
    },
    column: {
      flexBasis: '33.33%',
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: theme.spacing(1, 2),
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }),
);

  const classes = useStyles();



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


      <Accordion defaultExpanded>
        <AccordionSummary
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <Button variant="outlined" color="primary" 
            onClick={() => { setSelected(!selected) }}
            style={{width:"95%", padding:"15px", margin: "30px 0px 0px 10px", border: `${selected ? "solid 2px" : "solid 1px"}`, borderColor: `${selected ? "#FE8C56" : "#9FA8DC"}`,}}>
            <CheckBox />フリップ1<DeleteAlertDialog />
            <br /><ExpandMoreIcon />
          </Button>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
            <textarea 
              cols={80} 
              rows={9} 
              placeholder={'メモ'} 
              style={{
                width: '92%',
                padding: '10px',
                margin: '0 0 0 10px',
                border: '1px solid #9FA8DC',
                borderRadius: '5px',
                color: '#9FA8DC',
                fontFamily: 'inherit',
              }}>
            </textarea>
        </AccordionDetails>
        <AccordionActions>
          <FormControl>
            <form noValidate>
              <TextField
                id='datetime-local'
                label='LINE 通知'
                type='datetime-local'
                defaultValue='2020-09-15T10:30'
                InputLabelProps={{
                  shrink: true,
                }}
                style={{
                  margin: '0px 80px 10px 0px',
                }}
              />
            </form>
            </FormControl>
          <Button                 
            style={{
              margin: '0px 80px 10px 0px',
            }} 
            size="small">Cancel</Button>
          <Button
            style={{
              margin: '0px 80px 10px 0px',
            }}
            size="small" color="primary">
            Save
          </Button>
        </AccordionActions>
      </Accordion>
  

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