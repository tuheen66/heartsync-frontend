import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { paginationClasses } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import bannerImg from "./../../assets/images/biodata.jpg";
import { Helmet } from "react-helmet-async";
import BiodataCard from "../../Components/BiodataCard";

const Biodatas = () => {
  const axiosPublic = useAxiosPublic();

  const [gender, setGender] = useState("");
  const [minAge, setMinAge] = useState(null);
  const [maxAge, setMaxAge] = useState(null);
  const [permaDivision, setPermaDivision] = useState("");

  const [currentPage, setCurrentPage] = useState(0);

  const { count } = useLoaderData();

  const itemsPerPage = 8;
  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()];

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };



  const { data: biodatas = [], refetch } = useQuery({
    queryKey: [
      "biodatas",
      gender,
      minAge,
      maxAge,
      permaDivision,
      currentPage,
      itemsPerPage,
    ],
    queryFn: async () => {
      const res = await axiosPublic.get(`/searched-biodata`, {
        params: {
          gender: gender || "",
          minAge: minAge || "",
          maxAge: maxAge || "",
          permaDivision: permaDivision || "",
          page: currentPage,
          size: itemsPerPage,
        },
      });

      return res.data;
    },
  });



  const handleSearch = (e) => {
    e.preventDefault();
    const selectGender = e.target.gender.value;
    const smallAge = e.target.minAge.value;
    const bigAge = e.target.maxAge.value;
    const address = e.target.permanentDivision.value;
    setGender(selectGender);
    setMinAge(smallAge);
    setMaxAge(bigAge);
    setPermaDivision(address);
  };

  refetch();

  return (
    <div>
      <Helmet>
        <title>Heartsync | Biodata</title>
      </Helmet>
      <div
        className="mx-auto min-h-[200px] md:min-h-[300px] lg:min-h-[450px]  bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImg})`,
        }}
      >
        <div className="flex justify-center ">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white items-center my-20 md:my-40 lg:my-52">
            Biodatas
          </h2>
        </div>
      </div>

      <div className="w-[90%] mx-auto my-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/5">
            <h2 className="text-center text-2xl font-bold text-gray-600">
              Find your desired Biodata{" "}
            </h2>
            <form
              onSubmit={handleSearch}
              className=" gap-4 my-8 justify-between items-center  mx-auto bg-purple-200 px-8 py-4 "
            >
              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                >
                  Select Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">All</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div>
                <div className="relative z-0  mb-5 mt-6 ">
                  <input
                    type="number"
                    name="minAge"
                    id="minAge"
                    className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="minAge"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Minimum Age
                  </label>
                </div>

                <div className="relative z-0  mb-5 ">
                  <input
                    type="number"
                    name="maxAge"
                    id="maxAge"
                    className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="maxAge"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Maximum Age
                  </label>
                </div>
              </div>

              <div>
                <label
                  htmlFor="permanentDivision"
                  className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                >
                  Permanent Division
                </label>
                <select
                  id="permanentDivision"
                  name="permanentDivision"
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">All</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chattagram">Chattagram</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Barisal">Barisal</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Mymensing">Mymensing</option>
                  <option value="Sylhet">Sylhet</option>
                </select>
              </div>
              <button
                className="bg-[#a9106b] text-white py-2 px-4 my-6 w-full"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          <div className=" lg:w-4/5 grid lg:grid-cols-4 gap-8">
            {biodatas.map((biodata) => (
              <BiodataCard key={biodata._id} biodata={biodata}/>
            ))}
          </div>
        </div>

        <div className="flex mt-16 justify-center">
          <button
            onClick={handlePrevPage}
            className="border-2 mx-2 bg-gray-300 px-4 py-3"
          >
            <FaChevronLeft></FaChevronLeft>
          </button>
          {pages.map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              className={`lg:mx-4 px-4 ${
                currentPage === page
                  ? "bg-[#a9106b] text-white text-xl"
                  : "bg-gray-300 text-xl"
              }`}
              key={paginationClasses}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            className="border-2 mx-2 bg-gray-300 px-4 py-3"
          >
            <FaChevronRight/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Biodatas;
