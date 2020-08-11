import React, { FC } from 'react';
import { Card, Typography, TextField, Divider, Button } from '@material-ui/core';
import { Flip } from '../models/flip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import styled from '@emotion/styled';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

// Propsを受け取る　親からデータをもらって表示する　FC受け取る型：Props
const EditCard = () => {

  // FlipListが親　データを取る必要がない

  return (
    <Card>
      <TextField />
      <Divider />
      <TextField />
      <Divider />
      <div>LINE通知</div>
      <Divider />
      <textarea cols={40} rows={4}></textarea>
      <Divider />
      <Button>キャンセル</Button>
      <Button>更新</Button>
      <Divider />
      <Button>削除</Button>
    </Card>
  );
};

const Root = styled(Card)({
  backgroundColor: "#abcdef",
  padding: "10px",
  display: "flex",
});

export default EditCard;