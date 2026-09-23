import React, { useEffect, useState } from "react";

const useAppData = () => {
  const [loader, setLoader] = useState(true);
  const [appData, setAppData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log(data);
      setTimeout(() => {
        setAppData(data);
        setLoader(false);
      }, 1000);
    };
    fetchData();
  }, []);
  return {appData,loader};
};

export default useAppData;
