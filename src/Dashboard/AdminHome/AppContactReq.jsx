import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AppContactReq = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: requestedContacts = [], refetch } = useQuery({
    queryKey: ["requestedContacts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/contact-requests");
      return res.data;
    },
  });

  const approveContactRequest = (item) => {
    axiosSecure.patch(`/contact-requests/${item._id}`).then((res) => {
      console.log(res.data);

      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "contact request approved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
       <Helmet>
        <title>Heartsync | Approve Contact Request</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl text-gray-600 my-12">Approve Contact Request</h2>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Biodata Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact Request
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
                  <td className="px-6 py-4">{item.email} </td>

                  <td className="px-6 py-4">{item.biodataId}</td>
                  {item.status === "approved" ? (
                    <td className="px-6 py-4">
                      <button
                        onClick={() => approveContactRequest(item)}
                        className="font-medium uppercase text-white dark:text-blue-500  bg-green-600 py-2 px-3 disabled"
                      >
                        {item.status}
                      </button>
                    </td>
                  ) : (
                    <td className="px-6 py-4">
                      <button
                        onClick={() => approveContactRequest(item)}
                        className="font-medium uppercase text-white dark:text-blue-500  bg-[#a9106b] py-2 px-3"
                      >
                        {item.status}
                      </button>
                    </td>
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

export default AppContactReq;
