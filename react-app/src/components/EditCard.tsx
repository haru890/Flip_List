import React from 'react';
import { Card, TextField, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import FormControl from '@material-ui/core/FormControl';
import Alert from '@material-ui/lab/Alert';

// Propsを受け取る　親からデータをもらって表示する　FC受け取る型：Props
const EditCard = () => {

  // FlipListが親　データを取る必要がない

  return (
    <div>
      <form>
        <Card>
          <TextField 
            placeholder={' オモテ'} 
            style={{
              width: '90%',
              margin: '30px 0 0 30px',
            }} 
            variant='outlined'
          />
          <TextField 
            placeholder={' ウラ'} 
            style={{
              width: '90%',
              margin: '10px 0 0 30px',
            }} 
            variant='outlined'
          />
          <textarea 
            cols={80} 
            rows={9} 
            placeholder={'メモ'} 
            style={{
              width: '86%',
              padding: '10px',
              margin: '10px 0 0 30px',
              border: '1px solid #9FA8DC',
              borderRadius: '5px',
              color: '#9FA8DC',
              fontFamily: 'inherit',
            }}>
          </textarea>
          {/* <FormControl>
            <form noValidate>
              <TextField
                id="datetime-local"
                label="LINE 通知"
                type="datetime-local"
                defaultValue="2020-09-15T10:30"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{margin:"10px 10px 10px 20px"}}
              />
            </form>
          </FormControl> */}
          {/* <div>
            <Button
              type='submit'
              variant="outlined"
              color="secondary"
              style={{
                margin:'10px 10px 10px 15px',
                width:"45%",
                padding:"0"
              }}
            >
              <Tooltip title="Delete">
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              削除
            </Button>
          </div> */}
          <div>
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
                  margin: '30px 30px 10px 75px',
                }}
              />
            </form>
          </FormControl>
            <Button
              type='submit'
              variant='outlined'
              color='primary'
              startIcon={<SaveIcon />}
              style={{
                margin: '30px 5px 30px 25px',
                width: '30%',
                padding: '10px 5px',
              }}
            >
              追加
              {/* フリップ選択時は「更新」と表示させ、選択されているフリップの枠線の色が変わる */}
              {/* 更新 */}
            </Button>
          </div>
        </Card>
      </form>

      {/* 登録・更新処理を行った際に出し分けて表示させる */}
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert> */}
      <Alert severity='success'>This is a success message!</Alert>
    </div>
  );
};

export default EditCard;