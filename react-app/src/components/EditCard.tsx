import React from 'react';
import { Card, TextField, Divider, Button, IconButton, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Alert from '@material-ui/lab/Alert';
import SendIcon from '@material-ui/icons/Send';

// Propsを受け取る　親からデータをもらって表示する　FC受け取る型：Props
const EditCard = () => {

  // FlipListが親　データを取る必要がない

  return (
    <div>
      <form>
        <Card>
          <TextField placeholder={" オモテ"} style={{width:"100%", padding:"10px"}} variant="outlined"/>
          <TextField placeholder={" ウラ"} style={{width:"100%", padding:"10px"}} variant="outlined"/>
          <FormControl>
            <InputLabel>LINE通知</InputLabel>
            <Select
            >
              <MenuItem value="">
                <em>通知なし</em>
              </MenuItem>
              <MenuItem value={10}>07:00〜</MenuItem>
              <MenuItem value={20}>08:00〜</MenuItem>
              <MenuItem value={30}>09:00〜</MenuItem>
            </Select>
          </FormControl>
          <Divider />
          <textarea cols={80} rows={9} placeholder={" メモ"} style={{margin:"10px"}}></textarea>
          <Divider />
            <Button
              variant="outlined"
              startIcon={<CancelIcon />}
              style={{
                margin:'3px 7px 3px 15px',
                width:"45%",
                padding:"17px 25px 17px 25px"
              }}
            >
              キャンセル
            </Button>
            <Button
              type='submit'
              variant="outlined"
              color="secondary"
              style={{margin:'5px 10px 5px 15px',width:"45%"}}
            >
              <Tooltip title="Delete">
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              削除
            </Button>
          <div>
            <Button
              type='submit'
              variant="outlined"
              color="primary"
              startIcon={<SaveIcon />}
              style={{
                margin:'5px',
                width:'98%',
                padding:"15px"
              }}
            >
              更新
            </Button>
          </div>
          <div>
            <Button
              type='submit'
              variant="outlined"
              color="primary"
              startIcon={<SendIcon />}
              style={{
                margin:'5px',
                width:'98%',
                padding:"15px"
              }}
            >
              登録
            </Button>
          </div>
        </Card>
      </form>

      {/* 登録・更新処理を行った際に出し分けて表示させる */}
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert> */}
      <Alert severity="success">This is a success message!</Alert>
    </div>
  );
};

export default EditCard;