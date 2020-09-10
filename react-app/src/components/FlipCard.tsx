import styled from "@emotion/styled";
import { Card, CardContent, Typography } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import React, { FC } from "react";
import { Flip } from "../models/flip";

interface Props {
  flip: Flip;
}

// Propsを受け取る　親からデータをもらって表示する　FC受け取る型：Props
const FlipCard: FC<Props> = ({ flip }) => {
  // FlipListが親　データを取る必要がない

  return (
    <Root>
      <CardContent>
        {flip.check ? (
          <CheckCircleIcon fontSize="large" color="primary" />
        ) : (
          <RadioButtonUncheckedIcon fontSize="large" />
        )}
        <Typography variant="h6">{flip.question}</Typography>
        {flip.remind ? (
          <NotificationsActiveIcon fontSize="large" color="primary" />
        ) : null}
        <NotificationsActiveIcon fontSize="large" color="primary" />
      </CardContent>
    </Root>
  );
};

const Root = styled(Card)({
  backgroundColor: "#abcdef",
  padding: "10px",
  display: "flex",
});

export default FlipCard;
