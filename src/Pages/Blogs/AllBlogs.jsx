import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "./BlogCard";
import { Helmet } from "react-helmet-async";

const AllBlogsPge = () => {
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
      <Helmet>
        <title>Heartsync | Blogs</title>
      </Helmet>
      <h2 className="text-center text-3xl text-gray-700 my-12 font-bold">
        All Our Blogs
      </h2>
      <div className="grid grid-cols-4 gap-12 w-[90%] mx-auto mb-12">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPge;
