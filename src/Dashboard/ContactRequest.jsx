import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ContactRequest = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: requestedContacts = [], refetch } = useQuery({
    queryKey: ["requestedContacts", user?.email],
    queryFn: async () => {
      refetch()
      const res = await axiosPublic.get(
        `/contact-request?email=${user?.email}`
      );
      return res.data;
    },
  });

  const handleDelete = (id) => {
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
        axiosPublic.delete(`/contacts-request/${id}`).then((res) => {
          refetch();
          if (res.data.deleteCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your requested biodata has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="mb-12">
      <Helmet>
        <title>Heartsync | Contact Request</title>
      </Helmet>
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
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
                <th scope="col" className="px-6 py-3">
                  Mobile No
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
                  <td className="px-6 py-4 ">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-[#a9106b] text-white px-2 py-2"
                    >
                      Delete
                    </button>
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
