import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const AppsCard = ({app}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={app.image}
          alt={app.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {app.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-between font-bold">
          <div className="badge badge-outline border-none bg-green-100 text-green-500 py-4 px-8"><FaDownload /> {app.downloads}</div>
          <div className="badge badge-outline border-none bg-orange-100 text-orange-500 py-4 px-8"><FaStar /> {app.ratingAvg}</div>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
