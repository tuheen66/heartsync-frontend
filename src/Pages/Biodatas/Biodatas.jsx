import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Biodata from "../../Components/Biodata";

const Biodatas = () => {
  const axiosPublic = useAxiosPublic();

  const { data: biodatas = [] } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodata", {});
      return res.data;
    },
  });

  return (
    <div className="w-[90%] mx-auto">
      <h2>Biodata</h2>

      <div>
        <h2 className="text-center text-3xl font-bold text-gray-600">
          {" "}
          Find your desired Biodata{" "}
        </h2>
        <form className="flex gap-4 my-8 justify-between items-center w-[60%] mx-auto bg-purple-200 px-8 py-4 ">
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
              <option value="Select">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <div className="relative z-0  mb-5 ">
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
              <option value="Select">Select</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattagram">Chattagram</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barisal">Barisal</option>
              <option value="Khulna">Khulna</option>
              <option value="Mymensing">Mymensing</option>
              <option value="Sylhet">Sylhet</option>
            </select>
          </div>
          <button className="bg-[#a9106b] text-white py-2 px-4" type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {biodatas.map((biodata) => (
          <Biodata key={biodata._id} biodata={biodata}></Biodata>
        ))}
      </div>
    </div>
  );
};

export default Biodatas;
