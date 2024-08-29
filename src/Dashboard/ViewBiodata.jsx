import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ViewBiodata = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: biodata = [] } = useQuery({
    queryKey: ["biodata", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/biodata/${user.email}`);
      return res.data;
    },
  });

  const birthDate = biodata.birth_date;
  const date = new Date(birthDate);

  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = date
    .toLocaleDateString("en-GB", options)
    .replace(",", "");

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-12">
        Biodata of {biodata.name}
      </h2>

      <div className="flex  mt-12 ">
        <div class=" w-[70%] ml-12">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 ">
                  Name
                </th>
                <th scope="col" class="px-6 ">
                  :
                </th>
                <th scope="col" class="px-6 ">
                  {biodata.name}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Biodata Type
                </th>
                <td className="px-6 ">:</td>
                <td className="px-6 ">{biodata.gender}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Date of Birth
                </th>
                <td className="px-6 ">:</td>
                <td className="px-6 ">{formattedDate}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Age
                </th>
                <td className="px-6 ">:</td>
                <td className="px-6 ">{biodata.age} yrs</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Height
                </th>
                <td className="px-6 ">:</td>
                <td className="px-6 ">{biodata.height} ft</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Weight
                </th>
                <td className="px-6 ">:</td>
                <td className="px-6 ">{biodata.weight} kg</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Expected Partner Height
                </th>
                <td className="px-6 ">:</td>
                <td className="px-6 ">{biodata.partner_height} ft</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Expected Partner Weight
                </th>
                <td className="px-6 ">:</td>
                <td className="px-6 ">{biodata.partner_weight} kg</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Expected Partner age
                </th>
                <td className="px-6 ">:</td>
                <td className="px-6 ">{biodata.partner_age} yrs</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Religion
                </th>
                <td className="px-6 ">:</td>
                <td className="px-6 ">{biodata.race}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Father's Name
                </th>
                <td className="px-6 ">:</td>
                <td className="px-6 ">{biodata.father_name}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Mother's Name
                </th>
                <td className="px-6 ">:</td>
                <td className="px-6 ">{biodata.mother_name}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Permanent Division
                </th>
                <td className="px-6 ">:</td>
                <td className="px-6 ">{biodata.permanentDivision}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Present Division
                </th>
                <td className="px-6 ">:</td>
                <td className="px-6 ">{biodata.presentDivision}</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Contact Email
                </th>
                <td className="px-6 ">:</td>
                <td className="px-6 ">{biodata.email}</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Contact Phone Number
                </th>
                <td className="px-6 ">:</td>
                <td className="px-6 ">{biodata.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-[30%] ">
          <img src={biodata.photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ViewBiodata;
