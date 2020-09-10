import { Card, CardContent, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { fetchFlips } from "../api/flip";
import { Flip } from "../models/flip";
import FlipCard from "./FlipCard";

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
    data.then((flips) => {
      setFlips(flips);
    });
  }, []);

  return (
    <Card>
      <CardContent>
        {flips
          ? flips.map((flip) => (
              <>
                <Typography variant="h6">{flip}</Typography>
                <FlipCard flip={flip} />
              </>
            ))
          : null}
      </CardContent>
    </Card>
  );
};

export default FlipList;
