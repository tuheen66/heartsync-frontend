import React, { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ApprovedPremium = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const [premiumBiodata, setPremiumBiodata] = useState([]);

  const { data: biodatas = [], refetch } = useQuery({
    queryKey: ["biodata"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodata");
      setPremiumBiodata(res.data);
      return res.data;
    },
  });

  const premBiodataRequest = premiumBiodata.filter(
    (premBiodata) => premBiodata.status === "premium-request"
  );

  const premiumBiodatas = premiumBiodata.filter(
    (premBiodata) => premBiodata.status === "premium"
  );

  const handleMakeBiodataPremium = (item) => {
    axiosSecure.patch(`/biodata/appPremium/${item._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${item.name} is made a Premium biodata`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Heartsync | Approved Premium</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl text-gray-600 my-12">
        Make Biodata Premium Request
      </h2>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Biodata ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>

                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>

            {/* requested premium biodata */}
            <tbody>
              {premBiodataRequest.map((item) => (
                <tr
                  key={item.biodataId}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4 text-center">{item.biodataId}</td>

                  <td className="px-6 py-4 ">{item.email}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleMakeBiodataPremium(item)}
                      className="bg-[#a9106b] text-white px-2 py-2"
                    >
                      {item.status === "premium" ? "Premium" : "Make Premium"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            {/* confirmed premium biodata */}
            <tbody>
              {premiumBiodatas.map((item) => (
                <tr
                  key={item.biodataId}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4 text-center">{item.biodataId}</td>

                  <td className="px-6 py-4 ">{item.email}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleMakeBiodataPremium(item)}
                      className="bg-[#a9106b] text-white px-2 py-2"
                    >
                      {item.status === "premium" ? "Premium" : "Make Premium"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApprovedPremium;
