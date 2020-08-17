import React from 'react';
import { Card, TextField, Divider, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

// Propsを受け取る　親からデータをもらって表示する　FC受け取る型：Props
const EditCard = () => {

  // 削除ボタン押下時のモーダル表示
  class Lesson extends React.Component {
    constructor(props: boolean) {
      super(props);
      this.state = {isModalOpen: false};
    }
  }

  // FlipListが親　データを取る必要がない

  return (
    <form>
      <Card>
        <TextField placeholder={" オモテ"} style={{width:"100%"}}/>
        <Divider />
        <TextField placeholder={" ウラ"} style={{width:"100%"}}/>
        <Divider />
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
            variant="contained"
            startIcon={<CancelIcon />}
            style={{margin:'5px 15px 5px 15px',width:"45%"}}
          >
            キャンセル
          </Button>
          <Button
            type='submit'
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            style={{margin:'5px 15px 5px 15px',width:"45%"}}
          >
            削除
          </Button>
        <div>
          <Button
            type='submit'
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            style={{margin:'5px',
            width:'98%'}}
          >
            保存
          </Button>
        </div>
        <div>
          <Button
            type='submit'
            variant="contained"
            color="primary"
            startIcon={<SystemUpdateAlt />}
            style={{margin:'5px',
            width:'98%'}}
          >
            登録
          </Button>
        </div>
      </Card>
    </form>
  );
};

export default EditCard;