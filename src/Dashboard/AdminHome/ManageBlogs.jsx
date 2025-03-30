import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageBlogs = () => {
  const axiosSecure = useAxiosSecure();
  const { data: blogs = [], refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosSecure.get("/blogs");
      return res.data;
    },
  });

  

  return (
    <div>
      <div>
        <Link to="/dashboard/createBlog">
        <button className="py-2 px-4 border-none rounded-md bg-[#a9106b] hover:bg-[#30336b] text-white">Create Blog</button>
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sl
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog, index) => (
              <tr
                key={blog._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-medium">{index + 1}</td>
                <td className="px-6 py-4 font-medium">
                  <div className="w-20">
                    <img src={blog.image} alt="" />
                  </div>
                </td>
                <td className="px-6 py-4">{blog.author}</td>
                <td className="px-6 py-4">{blog.title}</td>
                <td className="px-6 py-4  text-center  uppercase ">
                  {(new Date(blog.createdAt)).toISOString().split("T")[0]}
                </td>

                <td className=" ">
                  <Link to={`/blog-detail/${blog._id}`}>
                    <button className="py-2 px-4 border-none rounded-md bg-[#a9106b] hover:bg-[#30336b] text-white">
                      View Detail{" "}
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBlogs;
