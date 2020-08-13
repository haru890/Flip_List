import React from 'react';
import { Card, TextField, Divider, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

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
      <textarea cols={80} rows={9} placeholder={"説明を追加"} style={{margin:"10px"}}></textarea>
      <Divider />
      <div>
        <Button
          variant="contained"
          startIcon={<CancelIcon />}
          style={{margin:'5px',width:"40%"}}
        >
          キャンセル
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          style={{margin:'5px',width:"40%"}}
        >
          削除
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          style={{margin:'5px',
          width:'98%'}}
        >
          保存
        </Button>
      </div>
    </Card>
  );
};

export default EditCard;