import { Button, Card, FormControl, TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import React from "react";

// Propsを受け取る　親からデータをもらって表示する　FC受け取る型：Props
const EditCard = () => {
  // FlipListが親　データを取る必要がない

  return (
    <div>
      <form>
        <Card>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={30}
            defaultValue="Default Value"
            variant="outlined"
            style={{
              width: "90%",
              padding: "10px",
              margin: "10px 0 0 20px",
            }}
          ></TextField>
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
          <>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              startIcon={<SaveIcon />}
              style={{
                margin: "20px 5px 30px 40px",
                width: "30%",
                padding: "10px 5px",
              }}
            >
              追加
              {/* フリップ選択時は「更新」と表示させ、選択されているフリップの枠線の色が変わる */}
              {/* 更新 */}
            </Button>

            <FormControl>
              <form noValidate>
                <TextField
                  id="datetime-local"
                  label="LINE 通知"
                  type="datetime-local"
                  defaultValue="2020-09-15T10:30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{
                    margin: "20px 0px 10px 100px",
                  }}
                />
              </form>
            </FormControl>
          </>
        </Card>
      </form>

      {/* 登録・更新処理を行った際に出し分けて表示させる */}
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert> */}
      {/* <Alert severity="success">This is a success message!</Alert> */}
    </div>
  );
};

export default EditCard;
