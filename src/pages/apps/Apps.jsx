import React from "react";
import useAppData from "../../component/useHook/useAppData";
import { BallTriangle } from "react-loader-spinner";
import AppsCard from "../../component/ui/AppsCard";

const Apps = () => {
  const { appData, loader } = useAppData();
  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-3 gap-5">
        {loader ? (
          <div className="container mx-auto col-span-3 flex justify-center items-center">
            <BallTriangle />
          </div>
        ) : (
          appData.map((app) => <AppsCard app={app} key={app.id}></AppsCard>)
        )}
      </div>
    </div>
  );
};

export default Apps;
