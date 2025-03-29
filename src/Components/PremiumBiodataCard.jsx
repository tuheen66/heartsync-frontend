import { Link } from "react-router-dom";

const PremiumBiodataCard = ({ biodata }) => {
  return (
    <div className="bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-200 ">
      <div className="flex flex-col flex-grow ">
        <div className=" flex items-center justify-center">
          <img
            className=" w-full px-6 pt-6"
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
              <p className="text-gray-500 font-medium">Type</p>
              <p className="text-gray-800 capitalize">{biodata.gender}</p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">Age</p>
              <p className="text-gray-800">{biodata.age} yrs</p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">Occupation</p>
              <p className="text-gray-800">{biodata.occupation}</p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">Location</p>
              <p className="text-gray-800">{biodata.permanentDivision}</p>
            </div>
          </div>
        </div>
      </div>

      <Link
        to={`/biodata-details/${biodata._id}`}
        className="block w-full text-center bg-[#a9106b] hover:bg-pink-600 text-white py-1 px-4  transition-colors duration-200"
      >
        View Full Profile
      </Link>
    </div>
  );
};

export default PremiumBiodataCard;
