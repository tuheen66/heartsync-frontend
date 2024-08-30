import { Link } from "react-router-dom";


const Biodata = ({ biodata }) => {


  
  return (
    <div className="border-2 border-gray-300 shadow-gray-400 shadow-xl px-4 pb-4">
      <div className="flex  mt-12 ">
        <div class=" w-[70%]">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" class=" ">
                  Name
                </th>
                <th scope="col" class="px-4">
                  :
                </th>
                <th scope="col" class="">
                  {biodata.name}
                </th>
              </tr>
              <tr>
                <th scope="col" class=" ">
                  Biodata id
                </th>
                <th scope="col" class="px-4 py-2">
                  :
                </th>
                <th scope="col" class="">
                  {biodata.biodataId}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class=" py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Biodata Type
                </th>
                <td class="px-4">:</td>
                <td>{biodata.gender}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Age
                </th>
                <td class="px-4">:</td>
                <td>{biodata.age} yrs</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Occupation
                </th>
                <td class="px-4">:</td>
                <td>{biodata.occupation}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Permanent Division
                </th>
                <td class="px-4">:</td>
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
      <button
      
      className="bg-[#a9106b] text-white p-2 mt-2">View Profile</button>
      </Link>
    </div>
  );
};

export default Biodata;
