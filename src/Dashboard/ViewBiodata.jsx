import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";

import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ViewBiodata = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: biodata = [] } = useQuery({
    queryKey: ["biodata", user.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodatas/${user?.email}`);
      return res.data;
    },
  });

  const birthDate = biodata.birth_date;
  const date = new Date(birthDate);

  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = date
    .toLocaleDateString("en-GB", options)
    .replace(",", "");

  const premBioInfo = {
    name: biodata.name,
    biodataId: biodata.biodataId,
    photo: biodata.photo,
    biodataType: biodata.gender,
    age: biodata.age,
    occupation: biodata.occupation,
    permanentDivision: biodata.permanentDivision,
    email: biodata.email,
  };

  const handleBiodataPremiumRequest = (biodata) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .patch(`/prem-biodata/premium/${biodata._id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${biodata.name} is made Premium`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div className="mb-12">
       <Helmet>
        <title>Heartsync | View Biodata</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-center w-3/4 mx-auto my-12">
        Biodata of {biodata.name}
      </h2>

      <div className="flex flex-col-reverse gap-4 lg:flex-row  mt-12 ">
        <div class=" lg:w-[60%] md:mx-auto lg:ml-12">
          <table class="lg:w-[90%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" class="px-4 ">
                  Name
                </th>
                <th scope="col" class="px-4 ">
                  :
                </th>
                <th scope="col" class="px-4 ">
                  {biodata.name}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Biodata Type
                </th>
                <td className="px-4 ">:</td>
                <td className="px-4 ">{biodata.gender}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Date of Birth
                </th>
                <td className="px-4 ">:</td>
                <td className="px-4 ">{formattedDate}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Age
                </th>
                <td className="px-4 ">:</td>
                <td className="px-4 ">{biodata.age} yrs</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Height
                </th>
                <td className="px-4 ">:</td>
                <td className="px-4 ">{biodata.height} ft</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Weight
                </th>
                <td className="px-4 ">:</td>
                <td className="px-4 ">{biodata.weight} kg</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Expected Partner Height
                </th>
                <td className="px-4 ">:</td>
                <td className="px-4 ">{biodata.partner_height} ft</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Expected Partner Weight
                </th>
                <td className="px-4 ">:</td>
                <td className="px-4 ">{biodata.partner_weight} kg</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Expected Partner age
                </th>
                <td className="px-4 ">:</td>
                <td className="px-4 ">{biodata.partner_age} yrs</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Religion
                </th>
                <td className="px-4 ">:</td>
                <td className="px-4 ">{biodata.race}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Father's Name
                </th>
                <td className="px-4 ">:</td>
                <td className="px-4 ">{biodata.father_name}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Mother's Name
                </th>
                <td className="px-4 ">:</td>
                <td className="px-4 ">{biodata.mother_name}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Permanent Division
                </th>
                <td className="px-4 ">:</td>
                <td className="px-4 ">{biodata.permanentDivision}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Present Division
                </th>
                <td className="px-4 ">:</td>
                <td className="px-4 ">{biodata.presentDivision}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Contact Email
                </th>
                <td className="px-4 ">:</td>
                <td className="px-4 ">{biodata.email}</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Contact Phone Number
                </th>
                <td className="px-4 ">:</td>
                <td className="px-4 ">{biodata.phone}</td>
              </tr>
            </tbody>
          </table>

          <div className="px-6">
            <button
              onClick={() => handleBiodataPremiumRequest(biodata)}
              className={`bg-[#a9106b] text-white px-4 py-2 mt-12 ${
                biodata.status === "premium" && "invisible"
              }`}
            >
              Make Biodata to Premium
            </button>
          </div>
        </div>

        <div className="lg:w-[40%] md:mx-auto ">
          <img src={biodata.photo} alt="" />
        </div>
      </div>

      <div className="w-1/2 lg:w-full">
        {biodata.status === "premium" && (
          <p className=" mt-6 ml-6 font-semibold text-green-800 text-xl">
            {" "}
            ** Your Biodata is Premium **
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewBiodata;
