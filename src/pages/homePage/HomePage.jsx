import React, { Suspense } from "react";
import Banner from "../../component/Banner";
import Stats from "../../component/Stats";
import TrendingApps from "../../component/TrendingApps";

const appsPromise = fetch("/data.json").then((res) => res.json());

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <Suspense fallback={<div className="flex justify-center p-3"><span className="loading loading-bars loading-xl"></span></div>}>
        <TrendingApps appsPromise={appsPromise}></TrendingApps>
      </Suspense>
    </div>
  );
};

export default HomePage;
