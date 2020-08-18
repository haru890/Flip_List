import React, { FC } from 'react';
import { Card, Typography } from '@material-ui/core';
import { Flip } from '../models/flip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import styled from '@emotion/styled';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

interface Props {
  flip: Flip;
}

// Propsを受け取る　親からデータをもらって表示する　FC受け取る型：Props
const FlipCard:FC<Props> = ({flip}) => {

  // FlipListが親　データを取る必要がない

  return (
    <Root>
      {flip.check ? <CheckCircleIcon fontSize="large" color="primary"/> : <RadioButtonUncheckedIcon fontSize="large"/>}
      <Typography variant="h6">{flip.question}</Typography>
      {flip.remind ? <NotificationsActiveIcon fontSize="large" color="primary"/> : null}
      <NotificationsActiveIcon fontSize="large" color="primary"/>
    </Root>
  );
};

const Root = styled(Card)({
  backgroundColor: "#abcdef",
  padding: "10px",
  display: "flex",
});

export default FlipCard;