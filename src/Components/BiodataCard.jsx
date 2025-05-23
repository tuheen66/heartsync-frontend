import { Link } from "react-router-dom";

const BiodataCard = ({ biodata }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-200 ">
      <div className="flex flex-col flex-grow ">
        <div className=" flex items-center justify-center rounded-lg">
          <img
            className=" w-full  rounded-t-lg"
            src={biodata.photo}
            alt={biodata.name}
          />
        </div>

        <div className="p-5">
          {/* Name and ID */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              {biodata.name}
            </h3>
            <p className="text-sm text-gray-500">ID: {biodata.biodataId}</p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-3 text-sm mb-5">
            <div>
              <p className="text-gray-800 font-medium">Type</p>
              <p className="text-gray-500 capitalize">{biodata.gender}</p>
            </div>
            <div>
              <p className="text-gray-800 font-medium">Age</p>
              <p className="text-gray-500">{biodata.age} yrs</p>
            </div>
            <div>
              <p className="text-gray-800 font-medium">Occupation</p>
              <p className="text-gray-500">{biodata.occupation}</p>
            </div>
            <div>
              <p className="text-gray-800 font-medium">Location</p>
              <p className="text-gray-500">{biodata.permanentDivision}</p>
            </div>
          </div>
        </div>
      </div>

      <Link
        to={`/biodata-details/${biodata._id}`}
        className="block w-full text-sm text-center bg-[#a9106b] hover:bg-pink-600 text-white py-1 px-4  transition-colors duration-200"
      >
        View Full Profile
      </Link>
    </div>
  );
};

export default BiodataCard;
