import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "./../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const FavoriteBiodata = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: favBiodatas = [], refetch } = useQuery({
    queryKey: ["favBiodatas", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/favorite?email=${user?.email}`);
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
        axiosPublic.delete(`/favorite/${id}`).then((res) => {
          refetch();
          if (res.data.deleteCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your favorite biodata has been deleted.",
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
        <title>Heartsync | Favorite Biodata</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl text-gray-600 my-12">
        My Favorite Biodatas : {favBiodatas.length}
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
                  Permanent Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Occupation
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {favBiodatas.map((item) => (
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
                  <td className="px-6 py-4">{item.permanentAddress}</td>
                  <td className="px-6 py-4 uppercase">{item.occupation}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-[#a9106b] text-white px-2 py-2"
                    >
                      Delete
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

export default FavoriteBiodata;
