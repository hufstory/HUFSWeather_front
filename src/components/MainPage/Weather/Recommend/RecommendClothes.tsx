import React, { useEffect, useState } from "react";
import "./RecommendClothes.scss";

import { useAxios } from "../../../../hooks/useAxios";
import GptData from "../../../../data/GptData";

export const RecommendClothes = () => {
  const [data, setData] = useState<GptData>();
  const value: GptData = useAxios("/clothes");
  
  useEffect(() => {
    setData(value);
  }, [value]);

  return (
    <>
      <div>GPT Recommend</div>
      <div>{data && data.gptmessage}</div>
    </>
  );
};
