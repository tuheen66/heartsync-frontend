import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { AuthContext } from "../../providers/AuthProviders";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const BiodataDetails = () => {
  const biodata = useLoaderData();
  const axiosPublic = useAxiosPublic();

  // console.log(biodata._id);

  const { user } = useContext(AuthContext);

  const birthDate = biodata.birth_date;
  const date = new Date(birthDate);

  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = date
    .toLocaleDateString("en-GB", options)
    .replace(",", "");

  const handleAddToFavorite = () => {
    if (user && user?.email) {
      const favoriteBio = {
        name: biodata.name,
        biodataId: biodata.biodataId,
        permanentAddress: biodata.permanentDivision,
        occupation: biodata.occupation,
        email: user.email,
      };

      axiosPublic.post("/favorite", favoriteBio).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "The Biodata has been added to your favorite list",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    }
  };

  return (
    <div>
      <div className="w-[60%] mx-auto border-2 border-gray-300 shadow-gray-400 shadow-xl my-4 px-12 py-4">
        <div className="flex  mt-12 ">
          <div className=" w-[70%]">
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
                  <td>{biodata.gender}</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className=" py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Date of Birth
                  </th>
                  <td className="px-4">:</td>
                  <td>{formattedDate}</td>
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
                    Height
                  </th>
                  <td className="px-4">:</td>
                  <td>{biodata.height} ft</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Weight
                  </th>
                  <td className="px-4">:</td>
                  <td>{biodata.weight} kg</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Expected Partner Height
                  </th>
                  <td className="px-4">:</td>
                  <td>{biodata.partner_height} ft</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className=" font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Expected Partner Weight
                  </th>
                  <td className="px-4">:</td>
                  <td>{biodata.partner_weight} kg</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Expected Partner age
                  </th>
                  <td className="px-4">:</td>
                  <td>{biodata.partner_age} yrs</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Religion
                  </th>
                  <td className="px-4">:</td>
                  <td>{biodata.race}</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Father's Name
                  </th>
                  <td className="px-4">:</td>
                  <td>{biodata.father_name}</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Mother's Name
                  </th>
                  <td className="px-4">:</td>
                  <td>{biodata.mother_name}</td>
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

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Present Division
                  </th>
                  <td className="px-4">:</td>
                  <td>{biodata.presentDivision}</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Contact Email
                  </th>
                  <td className="px-4">:</td>
                  {user?.status === "premium" || user?.role === "admin" ? (
                    <td>{biodata.email}</td>
                  ) : (
                    "Only Premium users can view contact email"
                  )}
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className=" py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Contact Phone Number
                  </th>
                  <td className="px-4">:</td>
                  {user?.status === "premium" || user?.role === "admin" ? (
                    <td>{biodata.phone}</td>
                  ) : (
                    "Only Premium users can view contact phone"
                  )}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-[30%] ">
            <img className="" src={biodata.photo} alt="" />
          </div>
        </div>

        <Link>
          <button
            onClick={handleAddToFavorite}
            className="bg-[#a9106b] text-white px-4 py-2 my-4"
          >
            Add to Favorite
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default BiodataDetails;
