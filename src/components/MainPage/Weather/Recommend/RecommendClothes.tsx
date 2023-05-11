import React, { useEffect, useState } from "react";
import "./RecommendClothes.scss";

import { useAxios } from "../../../../hooks/useAxios";
import GptData from "../../../../data/GptData";

export const RecommendClothes = () => {
  const [gptData, setGptData] = useState<GptData>();
  const value: GptData = useAxios("/clothes");

  useEffect(() => {
    setGptData(value);
  }, [value]);

  return (
    <>
      <div>GPT Recommend</div>
      <div>{gptData && gptData.gptmessage}</div>
    </>
  );
};
