import { Link, useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "./../../Components/LoadingSpinner";
import { Helmet } from "react-helmet-async";
import BiodataCard from "../../Components/BiodataCard";
import { FaRegHeart } from "react-icons/fa";

const BiodataDetails = () => {
  const biodata = useLoaderData();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: premiumUser = [], isPending } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");

      return res.data;
    },
  });

  const premUsers = premiumUser.filter(
    (prUser) => prUser.membership === "premium" || prUser.role === "admin"
  );

  const premEmails = premUsers.map((user) => user.email);

  const currentUser = premEmails.includes(user.email);

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

      axiosPublic
        .post("/favorites", favoriteBio)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "The Biodata has been added to your favorite list",
              showConfirmButton: false,
              timer: 2000,
            });
          } else if (res.data.insertedId === null) {
            Swal.fire({
              title: "Ooops!",
              text: "Biodata already added to the favorite list'",
              icon: "error",
              confirmButtonText: "OK!",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const { data: similar = [] } = useQuery({
    queryKey: ["similar"],
    queryFn: async () => {
      const res = await axiosPublic.get("/similar");
      return res.data;
    },
  });

  const similarBiodata = similar.filter(
    (bio) =>
      biodata.gender === bio.gender && biodata.biodataId !== bio.biodataId
  );

  const selectedBiodata = similarBiodata.slice(0, 3);

  if (isPending) {
    <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <Helmet>
        <title>Heartsync | Detail Biodata</title>
      </Helmet>

      <div className="w-[70%] mx-auto bg-white  shadow-sm border border-gray-200 overflow-hidden my-4 sm:my-6 md:my-8">
        {/* Header Section - Stacked on mobile, row on sm+ */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          {/* Profile Image - Smaller on mobile */}
          <div className="w-32 h-32  md:w-40 md:h-40 lg:w-64 lg:h-64 border-4 border-white shadow-sm overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={biodata.photo}
              alt={biodata.name}
            />
          </div>

          {/* Profile Info */}
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              {biodata.name}
            </h1>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
              <span className="bg-purple-100 text-purple-800 text-xs px-2.5 py-1 rounded-full">
                ID: {biodata.biodataId}
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full">
                {biodata.gender}
              </span>
              <span className="bg-green-100 text-green-800 text-xs px-2.5 py-1 rounded-full">
                Age: {biodata.age} yrs
              </span>
            </div>
          </div>
        </div>

        {/* Main Content - Responsive columns */}
        <div className="p-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {/* Personal Info - Full width on mobile, 1st column on md+ */}
          <div className="space-y-3 ">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 border-b pb-1 sm:pb-2">
              Personal Details
            </h2>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm sm:text-base">
                Date of Birth
              </span>
              <span className="text-gray-800 font-medium text-sm sm:text-base">
                {formattedDate}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm sm:text-base">Height</span>
              <span className="text-gray-800 font-medium text-sm sm:text-base">
                {biodata.height} ft
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm sm:text-base">Weight</span>
              <span className="text-gray-800 font-medium text-sm sm:text-base">
                {biodata.weight} kg
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm sm:text-base">
                Religion
              </span>
              <span className="text-gray-800 font-medium text-sm sm:text-base">
                {biodata.race}
              </span>
            </div>
          </div>

          {/* Family Info - Full width on mobile, 2nd column on md+, 1st column on lg+ */}
          <div className="space-y-3  md:mt-0 lg:mt-0">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 border-b pb-1 sm:pb-2">
              Family Details
            </h2>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm sm:text-base">
                Father's Name
              </span>
              <span className="text-gray-800 font-medium text-sm sm:text-base">
                {biodata.father_name}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm sm:text-base">
                Mother's Name
              </span>
              <span className="text-gray-800 font-medium text-sm sm:text-base">
                {biodata.mother_name}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm sm:text-base">
                Permanent Division
              </span>
              <span className="text-gray-800 font-medium text-sm sm:text-base">
                {biodata.permanentDivision}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm sm:text-base">
                Present Division
              </span>
              <span className="text-gray-800 font-medium text-sm sm:text-base">
                {biodata.presentDivision}
              </span>
            </div>
          </div>

          {/* Partner Expectations - Full width on mobile+md, 3rd column on lg+ */}
          <div className="space-y-3  md:col-span-2 lg:col-span-1">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 border-b pb-1 sm:pb-2">
              Partner Expectations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm sm:text-base">Age</span>
                <span className="text-gray-800 font-medium text-sm sm:text-base">
                  {biodata.partner_age} yrs
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm sm:text-base">
                  Height
                </span>
                <span className="text-gray-800 font-medium text-sm sm:text-base">
                  {biodata.partner_height} ft
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm sm:text-base">
                  Weight
                </span>
                <span className="text-gray-800 font-medium text-sm sm:text-base">
                  {biodata.partner_weight} kg
                </span>
              </div>
            </div>

            {/* Contact Info - Conditionally Shown */}
            {currentUser && (
              <div className="mt-4 sm:mt-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-700 border-b pb-1 sm:pb-2">
                  Contact
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm sm:text-base">
                      Email
                    </span>
                    <span className="text-gray-800 font-medium text-sm sm:text-base">
                      {biodata.email}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm sm:text-base">
                      Phone
                    </span>
                    <span className="text-gray-800 font-medium text-sm sm:text-base">
                      {biodata.phone}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons - Responsive sizing */}
        <div className="bg-gray-50 px-4 sm:px-6 py-3 border-t flex flex-wrap justify-center gap-3 ">

          <Link>
            <button
              onClick={handleAddToFavorite}
              className="bg-[#a9106b] text-white px-4 py-2 my-4"
            >
              <FaRegHeart className="inline mr-4" />
              Add to Favorite
            </button>{" "}
          </Link>

          {!currentUser && (
            <Link to={`/dashboard/checkout/${biodata._id}`}>
              <button className="bg-[#a9106b] text-white px-4 py-2 my-4">
                Request Contact Information
              </button>{" "}
            </Link>
          )}
        </div>
      </div>

      {/* similar biodatas */}

      <div className="mb-12">
        <h2 className="text-center text-3xl font-bold text-gray-600 my-12">
          Some similar biodata you might be interested in
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-[70%] mx-auto gap-12 ">
          {selectedBiodata.map((biodata) => (
            <BiodataCard
              key={biodata.biodataId}
              biodata={biodata}
            ></BiodataCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiodataDetails;
