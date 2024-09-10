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
      <div className="grid lg:grid-cols-4 gap-8 mx-auto  border-2 mt-8 justify-center">
        <div className="  border-2 border-blue-500  text-center p-4 bg-blue-300">
          <h4 className="text-center uppercase text-3xl font-semibold text-gray-800">
            Total No of Biodata
          </h4>
          <div className="flex justify-center items-center gap-8 my-4">
            <div className="text-5xl text-[#0088FE]">
              <FaRegAddressBook></FaRegAddressBook>
            </div>
            <p className="text-5xl font-bold text-[#0088FE]">{totalBiodata}</p>
          </div>
        </div>
        <div className="  border-2 border-pink-500  text-center p-4 bg-pink-300">
          <h4 className="text-center uppercase text-3xl font-semibold text-gray-800">
            Total Marriages
          </h4>
          <div className="flex justify-center items-center gap-8 my-4">
            <div className="text-5xl text-pink-600">
            <RiHeartsFill></RiHeartsFill>
            </div>
            <p className="text-5xl font-bold text-pink-600">{totalMarriages}</p>
          </div>
        </div>

        <div className=" border-2 border-green-500  text-center p-4 bg-green-300 ">
          <h4 className="text-center uppercase text-3xl font-semibold text-gray-800">
            Total Male Biodata
          </h4>
          <div className="flex justify-center items-center gap-8 my-4">
            <div className="text-6xl text-[#00C49F]">
              <FaMale></FaMale>
            </div>
            <p className="text-5xl font-bold text-[#00C49F]">{maleBiodata}</p>
          </div>
        </div>

        <div className="  border-2 border-yellow-500  text-center p-4 bg-yellow-100">
          <h4 className="text-center uppercase text-3xl font-semibold text-gray-800">
            Total Female Biodata
          </h4>
          <div className="flex justify-center items-center gap-8 my-4">
            <div className="text-6xl text-[#ffa801]">
              <FaFemale></FaFemale>
            </div>
            <p className="text-5xl font-bold text-[#ffa801]">{femaleBiodata}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
