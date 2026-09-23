import React, { use, useEffect, useState } from "react";
import { CgLayoutGrid } from "react-icons/cg";
import AppsCard from "./ui/AppsCard";
import { BallTriangle } from "react-loader-spinner";

const TrendingApps = () => {
  //   const appData = use(appsPromise);
  // console.log(appData);
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
      },1000);
    };
    fetchData();
  }, []);

  return (
    <div className="my-10 container mx-auto space-y-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Trending apps</h2>
        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          nobis cum laboriosam odit nostrum praesentium doloremque sapiente
          debitis accusantium soluta.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {loader ? (
          <div className="container mx-auto col-span-3 flex justify-center items-center">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          appData.map((app) => <AppsCard app={app} key={app.id}></AppsCard>)
        )}
      </div>
    </div>
  );
};

export default TrendingApps;
