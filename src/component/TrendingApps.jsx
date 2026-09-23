import AppsCard from "./ui/AppsCard";
import { BallTriangle } from "react-loader-spinner";
import useAppData from "./useHook/useAppData";
import { Link } from "react-router";

const TrendingApps = () => {
  //   const appData = use(appsPromise);
  // console.log(appData);

  const { appData, loader } = useAppData();

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
            <BallTriangle />
          </div>
        ) : (
          appData
            .slice(0, 9)
            .map((app) => <AppsCard app={app} key={app.id}></AppsCard>)
        )}
      </div>
      <div className="flex justify-center">
        <Link to="/apps" className="btn btn-primary">
          Show all
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
