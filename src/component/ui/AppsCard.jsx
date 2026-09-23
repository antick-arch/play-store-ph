import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const AppsCard = ({app}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="p-5">
        <img
        className="w-50"
          src={app.image}
          alt={app.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {app.title}
        </h2>
        <div className="card-actions justify-between font-bold">
          <div className="badge badge-outline border-none bg-green-100 text-green-500 py-4 px-8"><FaDownload /> {app.downloads}</div>
          <div className="badge badge-outline border-none bg-orange-100 text-orange-500 py-4 px-8"><FaStar /> {app.ratingAvg}</div>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
