import { Link, useParams } from "react-router";
import useAppData from "../useHook/useAppData";
import { BallTriangle, DNA } from "react-loader-spinner";
const DetailsPage = () => {
  const { appData, loader } = useAppData();
  const { id } = useParams();
  const expectedApp = appData.find((app) => String(app.id) === String(id));

  if (loader) {
    return (
      <div className="flex justify-center items-center">
        <DNA></DNA>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-5 ">
      <div className="max-w-[30%] mx-auto space-y-5">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-40 h-auto"
            src={expectedApp.image}
            alt={expectedApp.title}
          />
          <h2 className="font-bold text-2xl">{expectedApp.title}</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold text text-gray-500">
            Review: {expectedApp.reviews}
          </h2>
          <h2 className="font-bold text text-gray-500">
            Size: {expectedApp.size}
          </h2>
        </div>
        <p className="text-justify">{expectedApp.description}</p>
        <div className="flex justify-end">
          <Link className="btn btn-primary">Install Now</Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
