import React, { useState, useEffect } from 'react';
import { Card, Divider, Typography } from '@material-ui/core';
import { fetchFlips } from '../api/flip';
import { Flip } from '../models/flip';

const FlipList = () => {
  const [flips, setFlips] = useState<Flip[] | undefined>(undefined);

  const fetchFlipsReq = async () => {
    try {
      const { data } = await fetchFlips();
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const data = fetchFlipsReq();
    data.then(flips => { setFlips(flips); });
  }, []);

  return (
    <Card>
      <Typography variant="h6">Flip一覧</Typography>
      <Divider />
      {/* ? 三項演算子 */}
      {flips ? flips.map((flip) => (
        // <Typography variant="h6">{flip}</Typography>
        <Typography variant="h6">{flip.id}{flip.question}{flip.answer}</Typography>
      )):null}
    </Card>
  );
};

export default FlipList;