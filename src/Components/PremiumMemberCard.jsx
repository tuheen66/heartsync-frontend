import React from "react";
import { Link } from "react-router-dom";

const PremiumMemberCard = ({biodata}) => {
  return (
    <div className=" flex flex-col  border-2 border-gray-300 shadow-gray-400 shadow-xl px-4 pb-4 ">
      <div className="flex  mt-12 flex-grow gap-2 ">
        <div className=" w-[70%] ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className=" ">
                  Name
                </th>
                <th scope="col" className="px-4">
                  :
                </th>
                <th scope="col" className="">
                  {biodata.name}
                </th>
              </tr>
              <tr>
                <th scope="col" className=" ">
                  Biodata id
                </th>
                <th scope="col" className="px-4 py-2">
                  :
                </th>
                <th scope="col" className="">
                  {biodata.biodataId}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className=" py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Biodata Type
                </th>
                <td className="px-4">:</td>
                <td>{biodata.biodataType}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Age
                </th>
                <td className="px-4">:</td>
                <td>{biodata.age} yrs</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Occupation
                </th>
                <td className="px-4">:</td>
                <td>{biodata.occupation}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Permanent Division
                </th>
                <td className="px-4">:</td>
                <td>{biodata.permanentDivision}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-[30%] ">
          <img className="" src={biodata.photo} alt="" />
        </div>
      </div>

      <Link to={`/biodata-details/${biodata._id}`}>
        <button className="bg-[#a9106b] text-white p-2 mt-2">
          View Profile
        </button>
      </Link>
    </div>
  );
};

export default PremiumMemberCard;
