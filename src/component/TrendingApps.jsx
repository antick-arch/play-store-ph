import React, { use } from "react";
import { CgLayoutGrid } from "react-icons/cg";
import AppsCard from "./ui/AppsCard";

const TrendingApps = ({ appsPromise }) => {
  const appData = use(appsPromise);
  // console.log(appData);
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
        {appData.map((app) => (
          <AppsCard app={app} key={app.id}></AppsCard>
        ))}
      </div>
    </div>
  );
};

export default TrendingApps;
