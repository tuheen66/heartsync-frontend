import React from "react";
import { FaFemale, FaMale } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa6";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { RiHeartsFill } from "react-icons/ri";

const Statistics = () => {
  const axiosSecure = useAxiosSecure();

  const { data: biodatas = [] } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await axiosSecure.get("/biodata");
      return res.data;
    },
  });

  const { data: marriage = [] } = useQuery({
    queryKey: ["marriage"],
    queryFn: async () => {
      const res = await axiosSecure.get("/marriage");
      return res.data;
    },
  });

  const totalMarriages = marriage.length;
  const totalBiodata = biodatas.length;
  const maleBiodata = biodatas.filter((item) => item.gender === "Male").length;
  const femaleBiodata = biodatas.filter(
    (item) => item.gender === "Female"
  ).length;

  return (
    <div>
      {/* <div className="grid lg:grid-cols-4 gap-8 mx-auto   mt-8 justify-center">
        <div className="  border-2 border-gray-300  text-center p-4 bg-slate-200">
          <h4 className="text-center uppercase text-3xl font-semibold text-gray-800">
            Total No of Biodata
          </h4>
          <div className="flex justify-center items-center gap-8 my-4">
            <div className="text-5xl text-[#0088FE]">
              <FaRegAddressBook />
            </div>
            <p className="text-5xl font-bold text-[#0088FE]">{totalBiodata}</p>
          </div>
        </div>
        <div className="  border-2 border-gray-300  text-center p-4 bg-slate-200">
          <h4 className="text-center uppercase text-3xl font-semibold text-gray-800">
            Total Marriages
          </h4>
          <div className="flex justify-center items-center gap-8 my-4">
            <div className="text-5xl text-pink-600">
              <RiHeartsFill />
            </div>
            <p className="text-5xl font-bold text-pink-600">{totalMarriages}</p>
          </div>
        </div>

        <div className=" border-2 border-gray-300  text-center p-4 bg-slate-200 ">
          <h4 className="text-center uppercase text-3xl font-semibold text-gray-800">
            Total Male Biodata
          </h4>
          <div className="flex justify-center items-center gap-8 my-4">
            <div className="text-6xl text-[#00C49F]">
              <FaMale />
            </div>
            <p className="text-5xl font-bold text-[#00C49F]">{maleBiodata}</p>
          </div>
        </div>

        <div className="  border-2 border-gray-300  text-center p-4 bg-slate-200">
          <h4 className="text-center uppercase text-3xl font-semibold text-gray-800">
            Total Female Biodata
          </h4>
          <div className="flex justify-center items-center gap-8 my-4">
            <div className="text-6xl text-[#ffa801]">
              <FaFemale />
            </div>
            <p className="text-5xl font-bold text-[#ffa801]">{femaleBiodata}</p>
          </div>
        </div>
      </div> */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] mx-auto  py-8">
  {/* Total Biodata Card */}
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Biodata</p>
          <h3 className="mt-2 text-3xl font-bold text-gray-900">{totalBiodata}</h3>
        </div>
        <div className="p-3 rounded-full bg-blue-50 text-blue-600">
          <FaRegAddressBook className="text-3xl" />
        </div>
      </div>
      <div className="mt-6">
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>
    </div>
  </div>

  {/* Marriages Card */}
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Marriages</p>
          <h3 className="mt-2 text-3xl font-bold text-gray-900">{totalMarriages}</h3>
        </div>
        <div className="p-3 rounded-full bg-pink-50 text-pink-600">
          <RiHeartsFill className="text-3xl" />
        </div>
      </div>
      <div className="mt-6">
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-pink-500 rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>
    </div>
  </div>

  {/* Male Biodata Card */}
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Male Biodata</p>
          <h3 className="mt-2 text-3xl font-bold text-gray-900">{maleBiodata}</h3>
        </div>
        <div className="p-3 rounded-full bg-teal-50 text-teal-600">
          <FaMale className="text-3xl" />
        </div>
      </div>
      <div className="mt-6">
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-teal-500 rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>
    </div>
  </div>

  {/* Female Biodata Card */}
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Female Biodata</p>
          <h3 className="mt-2 text-3xl font-bold text-gray-900">{femaleBiodata}</h3>
        </div>
        <div className="p-3 rounded-full bg-amber-50 text-amber-600">
          <FaFemale className="text-3xl" />
        </div>
      </div>
      <div className="mt-6">
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-amber-500 rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Statistics;
