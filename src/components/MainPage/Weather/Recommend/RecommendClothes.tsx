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
    <div className="GptZone">
      <div className="gptRecommend">GPT Recommend</div>
      {gptData ? (
        <div className="gptMessage">{gptData.gptmessage}</div>
      ) : (
        <div>GPT가 답안을 작성중입니다...</div> // 로딩 중일 때 표시될 내용
      )}
    </div>
  );
};
