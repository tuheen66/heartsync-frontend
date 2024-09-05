import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";

const ContactRequest = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: requestedContacts = [] } = useQuery({
    queryKey: ["requestedContacts", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/contact-request?email=${user?.email}`
      );
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-center text-3xl text-gray-600 font-bold mb-12 mt-16">
        My Contact Requests
      </h2>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Biodata Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact Request
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {requestedContacts.map((item) => (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </th>

                  <td className="px-6 py-4">{item.biodataId}</td>

                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      {item.status}
                    </a>
                  </td>

                  {item.status === "approved" && (
                    <td className="px-6 py-4">{item.phone} </td>
                  )}
                  {item.status === "approved" && (
                    <td className="px-6 py-4">{item.email} </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactRequest;
