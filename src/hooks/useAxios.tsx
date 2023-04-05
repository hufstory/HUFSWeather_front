import { useState, useEffect } from "react";
import { instance } from "./instance";

export const useAxios = (initalUrl: string): any => {
  const [url] = useState(initalUrl);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = () => instance.get(url).then(({ data }) => setValue(data));

  return value;
};
